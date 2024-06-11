import clsx from 'clsx';
import { Icon } from '../icon/Icon';

export function Footer() {
  return (
    <footer
      className={clsx(
        'mt-14 px-4 pt-0 space-y-8 bg-yellow-100 divide-y',
        'sm:pt-5 sm:px-6 lg:px-8 divide-purple-400/20',
      )}
    >
      <div
        className={clsx(
          'flex flex-col justify-between max-w-md py-8 mx-auto',
          'sm:flex-row sm:max-w-none lg:max-w-screen-2xl',
        )}
      >
        <span className="text-base text-purple-800/90">
          © {new Date().getFullYear()} 하누리봉사회. All rights reserved.
        </span>
        <p className="mt-0.5 flex items-center text-purple-800/90">
          고유번호 396-80-02560
        </p>
        <p className="mt-0.5 flex items-center text-purple-800/90">
          Made with
          <Icon icon="heart" className="w-5 h-5 mx-1" />
          <span>by D&amp;K Dreams</span>
        </p>
      </div>
    </footer>
  );
}
