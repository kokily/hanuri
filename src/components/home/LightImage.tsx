'use client';

import Image from 'next/image';
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';

import mainImage1 from '/public/main01.jpg';
import mainImage2 from '/public/main02.jpg';
import mainImage3 from '/public/main03.jpg';
import mainImage4 from '/public/main04.jpg';
import mainImage5 from '/public/main05.jpg';
import mainImage6 from '/public/main06.jpg';

export function LightImage() {
  return (
    <section className="relative px-4 pt-0 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto">
        <div className="relative">
          <div className="flex justify-center">
            <span className="inline-block px-4 py-2 font-medium text-white bg-purple-400 rounded-full shadow-md -rotate-1">
              관심과 사랑의 마음으로
            </span>
          </div>
        </div>

        <LightGallery speed={500} selector="figure">
          <div
            id="hero-gallery"
            className="relative z-10 grid grid-cols-12 gap-4 lg:px-4 2xl:px-16 mt-14 sm:mt-16 md:mt-20 lg:mt-24 sm:gap-6 lg:gap-10 xl:gap-12"
          >
            <div className="flex flex-col col-span-4 md:col-span-2 md:justify-end">
              {/* Image 1 */}
              <figure
                className="relative w-full cursor-pointer aspect-w-1 aspect-h-1 group hover:z-50"
                data-src={mainImage1.src}
              >
                <Image
                  src={mainImage1}
                  className="absolute inset-0 object-cover object-center w-full h-full duration-300 ease-in-out shadow-2xl rounded-2xl rotate-3 md:-rotate-8 md:-translate-y-12 md:translate-x-3 group-hover:rotate-0 group-hover:scale-110"
                  alt="하누리 봉사회01"
                  sizes="(min-width: 1280px) 11.875rem, (min-width: 768px) 16.67vw, 33vw"
                />
              </figure>
            </div>

            <div className="flex col-span-8 md:col-span-3 md:flex-col">
              {/* Image 2 */}
              <div className="w-1/2 mr-2 md:w-full sm:mr-3 md:mr-0">
                <figure
                  className="relative z-10 cursor-pointer aspect-w-1 aspect-h-1 group hover:z-50"
                  data-src={mainImage2.src}
                >
                  <Image
                    src={mainImage2}
                    className="absolute inset-0 object-cover object-center w-full h-full duration-300 ease-in-out shadow-2xl rounded-2xl -rotate-3 md:-rotate-8 group-hover:rotate-0 group-hover:scale-110"
                    alt="Children stacking blocks"
                    sizes="(min-width: 1280px) 17.875rem, (min-width: 768px) 25vw, 33vw"
                  />
                </figure>
              </div>

              {/* Image 3 */}
              <div className="relative w-1/2 ml-2 sm:ml-3 md:ml-6">
                <figure
                  className="cursor-pointer aspect-w-1 aspect-h-1 group hover:z-50"
                  data-src={mainImage3.src}
                >
                  <Image
                    src={mainImage3}
                    className="absolute inset-0 object-cover object-center w-full h-full duration-300 ease-in-out shadow-2xl rounded-2xl rotate-3 md:rotate-8 group-hover:rotate-0 group-hover:scale-110"
                    alt="Children painting"
                    sizes="(min-width: 1280px) 9rem, (min-width: 768px) 12.5vw, 33vw"
                  />
                </figure>
              </div>
            </div>

            <div className="col-span-4 md:col-span-4 md:pr-4">
              {/* Image 4 */}
              <figure
                className="relative w-full cursor-pointer aspect-w-1 aspect-h-1 group hover:z-50"
                data-src={mainImage4.src}
              >
                <Image
                  src={mainImage4}
                  className="absolute inset-0 object-cover object-center w-full h-full duration-300 ease-in-out shadow-2xl rounded-2xl -rotate-3 md:rotate-4 group-hover:rotate-0 group-hover:scale-110"
                  alt="Teacher reading to kids"
                  sizes="(min-width: 1280px) 22.5rem, 33vw"
                />
              </figure>
            </div>
            <div className="flex col-span-8 md:col-span-3 md:flex-col md:pr-3 md:translate-y-12">
              {/* Image 5 */}
              <div className="w-1/2 mr-2 md:w-full sm:mr-3 md:mr-0">
                <figure
                  className="relative z-10 cursor-pointer aspect-w-1 aspect-h-1 group hover:z-50"
                  data-src={mainImage5.src}
                >
                  <Image
                    src={mainImage5}
                    className="absolute inset-0 object-cover object-center w-full h-full duration-300 ease-in-out shadow-2xl rounded-2xl rotate-3 md:rotate-12 group-hover:rotate-0 group-hover:scale-110"
                    alt="Children stretching"
                    sizes="(min-width: 1280px) 17.875rem, (min-width: 768px) 25vw, 33vw"
                  />
                </figure>
              </div>

              {/* Image 6 */}
              <div className="relative w-1/2 ml-2 md:w-2/3 sm:ml-3 md:-ml-3 lg:-ml-6">
                <figure
                  className="relative cursor-pointer aspect-w-1 aspect-h-1 group hover:z-50 md:-translate-y-6"
                  data-src={mainImage6.src}
                >
                  <Image
                    src={mainImage6}
                    className="absolute inset-0 object-cover object-center w-full h-full duration-300 ease-in-out shadow-2xl rounded-2xl -rotate-3 md:-rotate-8 group-hover:rotate-0 group-hover:scale-110"
                    alt="Child holding up ART letters"
                    sizes="(min-width: 1280px) 11.375rem, (min-width: 768px) 16.67vw, 33vw"
                  />
                </figure>
              </div>
            </div>
          </div>
        </LightGallery>
      </div>
    </section>
  );
}
