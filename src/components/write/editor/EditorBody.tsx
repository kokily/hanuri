import { useMemo, useRef } from 'react';
import ReactQuill from 'react-quill';

import { client } from '@/helpers/client/hooks/client';
import { DragDrop } from '@/components/common/editor/DragDrop';

import 'react-quill/dist/quill.snow.css';

interface Props {
  body: string;
  onChangeBody: (text: string) => void;
}

export default function EditorBody(props: Props) {
  const quillRef = useRef(null);

  const imageUpload = async (formData: FormData) => {
    const response = await client.post<{ url: string }>(`/upload`, formData);

    if (!response.data) {
      alert('upload Failed');
    }

    const { url } = response.data;
    const editor = quillRef.current.getEditor();
    const range = editor.getSelection();

    editor.insertEmbed(range.index, 'image', `${url}`);
    editor.setSelection(range.index + 1);
  };

  const imageHandler = () => {
    const input = document.createElement('input');

    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.addEventListener('change', async () => {
      const file = input.files[0];
      const formData = new FormData();

      formData.append('file', file);

      try {
        await imageUpload(formData);
      } catch (err: any) {
        console.log(err);
      }
    });
  };

  const imageDragDrop = async (file: File) => {
    const formData = new FormData();

    formData.append('file', file);

    try {
      await imageUpload(formData);
    } catch (err) {
      console.log(err);
    }
  };

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          ['bold', 'italic', 'underline', 'strike'], // toggled buttons
          ['blockquote', 'code-block'],

          [{ list: 'ordered' }, { list: 'bullet' }],
          [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
          [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
          [{ direction: 'rtl' }], // text direction

          [{ header: [1, 2, 3, 4, 5, 6, false] }],

          [{ color: [] }, { background: [] }], // dropdown with defaults from theme
          [{ font: [] }],
          [{ align: [] }],
          ['link', 'image', 'video', 'formula'],
          ['clean'],
        ],
        handlers: {
          image: imageHandler,
        },
        ImageDrop: true,
      },
      clipboard: {
        matchVisual: false,
      },
    }),
    [],
  );

  return (
    <>
      <div className="flex flex-col top-0 flex-wrap min-h-full text-lg mb-10 scroll-auto">
        <ReactQuill
          ref={quillRef}
          value={props.body}
          onChange={props.onChangeBody}
          placeholder="본문을 작성해주세요."
          theme="snow"
          modules={modules}
        />
      </div>

      <DragDrop onDragDropUpload={imageDragDrop} />
    </>
  );
}
