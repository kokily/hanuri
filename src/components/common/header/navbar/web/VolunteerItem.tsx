import { Menu } from '@headlessui/react';
import clsx from 'clsx';
import Link from 'next/link';

interface Props {
  year: string;
  pathname: string;
}

export function VolunteerItem({ year, pathname }: Props) {
  return (
    <Menu.Item key={`desktop-dropdown-link-2024`} as="div">
      {({ close }) => (
        <>
          <Link
            href={`/gallery/${year}`}
            className={clsx(
              'block w-full py-4 rounded-xl sm:p-5 group',
              pathname === `/gallery/${year}`
                ? 'bg-purple-25'
                : 'transition duration-200 ease-in-out hover:bg-purple-25/60',
            )}
            onClick={close}
          >
            <h5 className="text-lg font-semibold text-purple-600">{year}년</h5>
            <p className="mt-1 text-sm text-purple-800 opacity-90">
              하누리 봉사활동
            </p>
          </Link>
          <>
            <hr className="my-1 border-purple-200/30 sm:my-2" />
          </>
        </>
      )}
    </Menu.Item>
  );
}
