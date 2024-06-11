import Image from 'next/image';
import clsx from 'clsx';

const hanuriColors = [
  'bg-yellow-200',
  'bg-purple-50',
  'bg-rose-50',
  'bg-teal-50',
];

interface Props {
  hanuri: HanuriType;
  onReadHanuri: (id: string) => void;
  index: number;
}

export function Gallery({ hanuri, onReadHanuri, index }: Props) {
  return hanuri ? (
    <div
      className={clsx(
        'grid w-full rounded-2xl sm:grid-cols-12 transition duration-500 brightness-100 hover:brightness-75 cursor-pointer',
        index > 0 && 'mt-8 lg:mt-0',
        hanuriColors[index % 4],
      )}
      onClick={() => onReadHanuri(hanuri.id)}
    >
      
      {/* Hanuri image */}
      <div
        className={clsx(
          'relative h-48 rounded-t-2xl sm:h-full sm:col-span-4',
          index % 2 == 0
            ? 'sm:rounded-tr-none sm:rounded-l-2xl'
            : 'sm:rounded-tl-none sm:rounded-r-2xl sm:order-2',
        )}
      >
        <Image
          src={hanuri.thumbnail}
          className={clsx(
            'absolute inset-0 object-cover object-center w-full h-full rounded-t-2xl',
            index % 2 == 0
              ? 'sm:rounded-tr-none sm:rounded-l-2xl'
              : 'sm:rounded-tl-none sm:rounded-r-2xl',
          )}
          fill
          alt={hanuri.title}
          sizes="(min-width: 1280px) 13rem, (min-width: 1024px) 16.67rem, (min-width: 640px) 14rem, calc(100vw - 2rem)"
        />
      </div>

      {/* Hanuri info */}
      <div
        className={clsx(
          'flex flex-col justify-center h-full px-6 py-8 sm:col-span-8 sm:py-10 sm:px-8 lg:px-6 xl:px-8',
          index % 2 == 1 && 'order-2 sm:order-1',
        )}
      >
        <div>
          <div className="inline-flex items-center justify-center px-3.5 py-0.5 text-sm -rotate-1 bg-purple-200 text-purple-700 font-medium leading-6 align-top rounded-xl">
            {new Date(hanuri.createdAt).toLocaleDateString()}
          </div>
        </div>
        <h4 className="mt-4 text-2xl font-bold text-purple-900 xl:text-3xl lg:text-2xl sm:text-3xl lg:leading-tight xl:leading-tight">
          {hanuri.title}
        </h4>
      </div>
    </div>
  ) : null;
}
