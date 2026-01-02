import dynamic from 'next/dynamic';
import { EditorTitle } from './editor/EditorTitle';
import { EditorTagBox } from './editor/EditorTagsBox';
import { EditorThumbnail } from './editor/EditorThumbnail';
import { EditorFooter } from './editor/EditorFooter';

const EditorBody = dynamic(() => import('./editor/EditorBody'), { ssr: false });

interface Props {
  writeProps: AddHanuriProps;
  tagProps: TagsProps;
}

export function Write({ writeProps, tagProps }: Props) {
  return (
    <section className="px-4 pt-16 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-25 to-purple-0">
      <EditorTitle
        value={writeProps.title}
        onChange={writeProps.onChangeTitle}
        placeholder="제목을 입력하세요"
      />

      <div className="flex flex-wrap w-full mt-10 mb-8">
        <EditorTagBox {...tagProps} />
      </div>

      {/* 날짜 입력 필드 */}
      <div className="w-full h-auto mx-auto my-0 mb-10">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          봉사활동 날짜
        </label>
        <input
          type="date"
          value={writeProps.date}
          onChange={writeProps.onChangeDate}
          className="w-auto px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          required
        />
      </div>

      <div className="w-full h-auto mx-auto my-0 mb-10">
        <EditorThumbnail
          thumbnail={writeProps.thumbnail}
          onChangeThumbnail={writeProps.onChangeThumbnail}
        />
      </div>

      <div className="w-full h-auto mx-auto my-0 mb-10">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          연도
        </label>
        <select
          className="w-32 px-3 py-2 pr-8 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          value={writeProps.year}
          onChange={writeProps.onChangeYear}
        >
          <option value="2026">2026년</option>
          <option value="2025">2025년</option>
          <option value="2024">2024년</option>
          <option value="2023">2023년</option>
          <option value="2022">2022년</option>
          <option value="2021">2021년</option>
        </select>
      </div>

      <EditorBody
        body={writeProps.body}
        onChangeBody={writeProps.onChangeBody}
      />

      <EditorFooter onSubmit={writeProps.onAddHanuri} />
    </section>
  );
}
