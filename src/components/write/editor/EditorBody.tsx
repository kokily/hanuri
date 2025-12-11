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
    try {
      const response = await client.post<{ url: string }>(`/upload`, formData);

      if (!response.data) {
        alert('upload Failed');
      }
  
      const { url } = response.data;
      const editor = quillRef.current.getEditor();
      const range = editor.getSelection(true);
  
      // Range가 없을 때 문서 끝에 삽입
      const insertIndex = range ? range.index : editor.getLength() - 1;
  
      editor.insertEmbed(insertIndex, 'image', `${url}`);
      editor.setSelection(insertIndex + 1, 0); 
    } catch (error) {
      console.error('이미지 업로드 실패: ', error);
    }
  };

  const imageHandler = () => {
    const input = document.createElement('input');

    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.setAttribute('multiple', 'multiple');
    input.click();

    input.addEventListener('change', async () => {
      const files = input.files;
      
      if (!files || files.length === 0) return;

      // 순차 업로드
      for (const file of Array.from(files)) {
        const formData = new FormData();
        formData.append('file', file);

        try {
          await imageUpload(formData);
        } catch (error) {
          console.error('이미지 업로드 실패:', error);
        }
      }
    });
  };

  const imageDragDrop = async (files: FileList | File[]) => {
    for (const file of Array.from(files)) {
      const formData = new FormData();
      formData.append('file', file);

      try {
        await imageUpload(formData);
      } catch (error) {
        console.error('이미지 업로드 실패: ', error);
      }
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
