import { type ChangeEvent, memo } from 'react';

type TagType = {
  tag: string;
  onRemove: (id: string) => void;
};

const TagItem = memo(({ tag, onRemove }: TagType) => (
  <div
    className="cursor-pointer text-blue-400 transition-all hover:text-red-500 mr-6"
    onClick={() => onRemove(tag)}
  >
    #{tag}
  </div>
));

TagItem.displayName = 'TagItem';

type TagsType = {
  tags: Array<string>;
  onRemove: (id: string) => void;
};

const TagsList = memo(({ tags, onRemove }: TagsType) => (
  <div className="flex justify-between ml-5">
    {tags.map((tag) => (
      <TagItem key={tag} tag={tag} onRemove={onRemove} />
    ))}
  </div>
));

TagsList.displayName = 'TagsList';

interface Props {
  input: string;
  localTags: string[];
  onRemoveTag: (tag: string) => void;
  onChangeText: (e: ChangeEvent<HTMLInputElement>) => void;
  onSetTags: (e: ChangeEvent<HTMLFormElement>) => void;
}

export function EditorTagBox(props: Props) {
  return (
    <div className="h-16 w-full flex items-center text-lg font-bold pl-4 pr-4 break-keep">
      <p className="mr-5">태그 👉</p>

      <form className="bg-none" onSubmit={props.onSetTags}>
        <input
          className="flex-1 border-none outline-none p-2 text-base bg-none placeholder-slate-700"
          placeholder="엔터로 입력"
          value={props.input}
          onChange={props.onChangeText}
        />

        <button
          className="
            bg-none text-blue-400 font-bold border border-collapse border-blue-400 rounded-lg px-2
            py-1 cursor-pointer transition-all hover:bg-teal-400 hover:text-teal-200 hover:border-teal-200 active:-translate-x-1
        "
          type="submit"
        >
          추가
        </button>
      </form>

      <TagsList tags={props.localTags} onRemove={props.onRemoveTag} />
    </div>
  );
}
