import Image from 'next/image';
import under_highlight from '/public/svg/under_highlight.svg';

export function AboutHeader() {
  return (
    <div className="px-4 text-center sm:px-6 lg:px-8">
      <h3 className="text-purple-900 h2">
        <span className="relative block">
          <span className="relative">
            <Image
              className="absolute inset-0 transform translate-y-9 sm:translate-y-10 xl:translate-y-12"
              src={under_highlight}
              alt=""
            />
            <span className="relative">하누리 봉사회를</span>
          </span>
        </span>
        <span className="block text-purple-800 h2 pt-5">소개합니다!</span>
      </h3>
    </div>
  );
}
