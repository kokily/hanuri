import Image, { StaticImageData } from 'next/image';
import clsx from 'clsx';
import dotStrip from '/public/svg/dots-strip.svg';
import dots from '/public/svg/dots.svg';

interface Props {
  sniffling: 'odd' | 'even';
  tags: string;
  title: string;
  body: string;
  image: StaticImageData;
  background: StaticImageData;
}

export function AboutFeature(props: Props) {
  return (
    <div className="grid max-w-xl mx-auto mt-20 lg:max-w-none sm:mt-24 lg:mt-44 lg:grid-cols-12 gap-14 sm:gap-16 lg:gap-8">
      <div
        className={clsx(
          'relative z-10 flex flex-col justify-center order-2 lg:col-span-6 lg:text-left',
          props.sniffling === 'even' && 'lg:order-1',
        )}
      >
        {/* Tag */}
        <div>
          <span className="inline-block px-4 py-2 font-medium text-purple-700 bg-purple-200 rounded-full shadow-md -rotate-1">
            {props.tags}
          </span>
        </div>

        {/* Contents */}
        <div>
          <h1 className="mt-3.5 font-bold text-purple-900 h3">{props.title}</h1>
          <p className="max-w-xl mt-3 text-lg text-purple-800 sm:leading-relaxed sm:text-xl">
            {props.body}
          </p>
        </div>
      </div>

      {/* Image */}
      <div
        className={clsx(
          'relative order-1 w-full max-w-xl mx-auto lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center',
          props.sniffling === 'even' && 'lg:order-2',
        )}
      >
        <div className="hidden lg:block">
          <Image
            src={props.background}
            className="absolute inset-0 w-full h-full transform lg:scale-135"
            alt=""
          />
        </div>

        <Image
          src={dotStrip}
          className="absolute top-0 origin-top transform -translate-x-1/2 -translate-y-8 left-1/2 lg:hidden sm:scale-100 scale-80"
          alt=""
        />

        <div
          className={clsx(
            'relative w-full mx-auto shadow-lg rounded-3xl lg:max-w-lg',
            props.sniffling === 'even' ? 'lg:mr-0 lg:ml-auto' : 'lg:mx-0',
          )}
        >
          <div className="relative block w-full">
            {/* Corner dots decoration */}
            <Image
              className={clsx(
                'absolute z-10 hidden w-40 transform lg:block -top-20 xl:w-48 xl:-top-20',
                props.sniffling === 'even' ? '-left-20' : '-right-20',
              )}
              src={dots}
              alt=""
            />
            {/* Block image */}
            <figure className="relative aspect-[12/10] md:order-1">
              <Image
                src={props.image}
                className="absolute inset-0 object-cover object-center w-full h-full shadow-xl rounded-3xl"
                fill
                sizes="(min-width: 1024px) 32rem, (min-width: 576px) 36rem, 100vw"
                alt={`image ${props.image}`}
              />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}
