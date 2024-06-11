'use client';

import Image from 'next/image';
import heroImage from '../../../../public/main.png';
import { Icon } from '@/components/common/icon/Icon';
import { useSetAtom } from 'jotai';
import { HeroVideoOpen } from '@/helpers/client/states';

export function HeroImage() {
  const OpenModal = useSetAtom(HeroVideoOpen);

  return (
    <div className="flex flex-col justify-center max-w-3xl mx-auto mt-16 lg:mt-0 lg:max-w-none lg:col-span-6">
      <div className="relative">
        <Image
          src={heroImage}
          priority
          className="w-full h-auto"
          alt="하누리 봉사회 메인사진"
          sizes="(min-width: 1280px) 39rem, (min-width: 1024px) 50vw, (min-width: 768px) 48rem, 100vw"
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <span className="absolute inline-flex w-20 h-20 bg-purple-400 rounded-full opacity-60 animate-ping" />

          <button
            className="relative z-10 flex items-center justify-center w-20 h-20 duration-300 ease-in-out rounded-full outline-none bg-purple-600/40 group hover:bg-purple-600/80"
            onClick={() => OpenModal(true)}
          >
            <Icon
              icon="playFilled"
              className="w-12 h-12 duration-300 ease-in-out text-white/90 group-hover:text-white/95"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
