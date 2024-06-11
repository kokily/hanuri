import type { ChangeEvent } from 'react';
import TextareaAutosize from 'react-textarea-autosize';

interface Props {
  value: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

export function EditorTitle(props: Props) {
  return (
    <TextareaAutosize
      className="
          block
          p-0
          text-3xl
          w-full
          resize-none
          leading-normal
          outline-none
          border-none
          font-bold
          text-blue-800
          mt-16
          mb-4 overflow-hidden
          placeholder-slate-600
          md:text-4xl
        "
      value={props.value}
      placeholder={props.placeholder}
      onChange={props.onChange}
    />
  );
}
