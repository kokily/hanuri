import Image from 'next/image';

interface Props {
  thumbnail: string;
}

export function HanuriThumbnail({ thumbnail }: Props) {
  return (
    <div className="relative z-10 mt-14 sm:mt-16 flex justify-center w-full max-w-[1200px] mx-auto px-2 sm:px-4">
      <div className="bg-white p-3 rounded-3xl shadow-2xl border-4 border-purple-100 w-full">
        <div className="relative aspect-w-3 aspect-h-2 sm:aspect-w-16 sm:aspect-h-9 w-full h-auto">
          <Image
            className="absolute inset-0 object-cover w-full h-full rounded-2xl"
            src={thumbnail}
            fill
            priority
            sizes="(min-width: 1280px) 1200px, (min-width: 1024px) calc(100vw - 4rem), (min-width: 640px) calc(100vw - 3rem), calc(100vw - 2rem)"
            alt={thumbnail.split('/')[4]}
          />
        </div>
      </div>
    </div>
  );
}
