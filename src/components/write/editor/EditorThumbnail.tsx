interface Props {
  thumbnail: string;
  onChangeThumbnail: () => void;
}

export function EditorThumbnail(props: Props) {
  return props.thumbnail ? (
    <img
      className="
        w-full max-w-3xl h-auto filter sepia-40 p-2
        border border-collapse rounded-lg
      "
      src={props.thumbnail}
      alt="썸네일"
    />
  ) : (
    <button
      className="
      cursor-pointer text-cyan-500 border border-collapse rounded-lg border-cyan-500
      bg-none font-bold py-1 px-2 transition-all
      hover:bg-cyan-500 hover:text-white hover:border-white
      active:-translate-y-1

    "
      onClick={props.onChangeThumbnail}
    >
      썸네일 업로드
    </button>
  );
}
