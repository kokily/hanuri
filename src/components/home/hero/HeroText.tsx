import clsx from 'clsx';
import { Button } from '@/components/common/button/Button';
import { Icon } from '@/components/common/icon/Icon';

export function HeroText() {
  return (
    <div className="flex flex-col items-center justify-center lg:items-start lg:col-span-6">
      <div>
        <span
          className={clsx(
            'inline-block px-4 py-2 font-medium text-purple-700',
            'bg-purple-200 rounded-full shadow-md -rotate-2',
          )}
        >
          하누리에 오신 걸 환영합니다
        </span>
      </div>

      <h1 className="max-w-xl mt-4 text-center text-purple-900 sm:mt-5 lg:text-left h1 lg:max-w-none">
        하누리 봉사회
      </h1>
      <p className="max-w-2xl mt-3 text-xl lreading-loose text-center text-purple-800 lg:text-left">
        이웃을 사랑하는 마음으로 저소득층 아동과 장애아, 그리고 노인 등, 모든
        봉사를 필요로 하는 곳에 따뜻한 손길을 내밀어 적극적인 봉사활동을 하기
        위해 최선을 다하고 있습니다
      </p>

      <div className="flex flex-col items-center mt-8 overflow-hidden sm:flex-row">
        <Button href="/about" variant="primary" size="lg">
          소개글
          <Icon
            icon="arrowNarrowRight"
            className="w-6 h-6 ml-3 group-hover:animate-horizontal-bounce"
            stroke={2}
          />
        </Button>
        <Button
          href="/gallery/2025"
          variant="secondary"
          className="mt-6 sm:mt-0 sm:ml-6"
          size="lg"
        >
          갤러리
          <Icon
            icon="playFilled"
            className={clsx(
              'mr-3 text-purple-600 duration-300 ease-in-out',
              'w-7 h-7 group-hover:text-purple-50',
            )}
          />
        </Button>
      </div>

      <p
        className={clsx(
          'hidden text-sm font-medium tracking-wider',
          'text-purple-900 uppercase sm:block lg:hidden xl:block mt-14',
        )}
      >
        소외된 이웃과 더불어 살아가는{' '}
        <span className="font-semibold text-purple-600">
          아름다운 세상을 만들어갑니다
        </span>
      </p>

      <div
        className={clsx(
          'flex-col hidden mt-8 overflow-hidden divide-y sm:flex sm:mt-5 sm:flex-row',
          'sm:divide-x sm:divide-y-0 lg:hidden xl:flex divide-purple-400/20',
        )}
      >
        <div className="flex flex-col items-center pb-5 sm:pb-0 sm:pr-10">
          <div className="flex justify-center w-full space-x-1">
            <Icon icon="users" className="w-10 h-10 text-blue-500" />
          </div>
          <p className="mt-2.5 text-xs font-bold text-purple-700 uppercase tracking-wide">
            자원봉사
          </p>
        </div>
        <div className="flex flex-col items-center py-5 sm:py-0 sm:px-10">
          <div className="flex justify-center w-full space-x-1">
            <Icon icon="moodKid" className="w-10 h-10 text-blue-500" />
          </div>
          <p className="mt-2.5 text-xs font-bold text-purple-700 uppercase tracking-wide">
            아동·청소년 복지
          </p>
        </div>
        <div className="flex flex-col items-center pt-5 sm:pt-0 sm:pl-10">
          <div className="flex justify-center w-full space-x-1">
            <Icon icon="messages" className="w-10 h-10 text-blue-500" />
          </div>
          <p className="mt-2.5 text-xs font-bold text-purple-700 uppercase tracking-wide">
            결연·후원
          </p>
        </div>
      </div>
    </div>
  );
}
