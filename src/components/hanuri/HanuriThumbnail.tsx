import Image from 'next/image';

interface Props {
  thumbnail: string;
}

export function HanuriThumbnail({ thumbnail }: Props) {
  return (
    <div className="relative z-10 mt-14 sm:mt-16 flex justify-center">
      <div className="relative xl:mx-10 sm:mx-0 aspect-w-3 aspect-h-2 sm:aspect-w-16 sm:aspect-h-9 w-1200 h-auto">
        <Image
          className="absolute inset-0 object-cover w-full h-full shadow-xl rounded-3xl"
          src={thumbnail}
          fill
          priority
          sizes="(min-width: 1280px) 1200px, (min-width: 1024px) calc(100vw - 4rem), (min-width: 640px) calc(100vw - 3rem), calc(100vw - 2rem)"
          alt={thumbnail.split('/')[4]}
        />
      </div>
    </div>
  );
}
