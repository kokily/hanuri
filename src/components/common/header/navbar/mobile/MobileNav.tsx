'use client';

import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon } from './MenuIcon';
import clsx from 'clsx';
import { NotVolunteer } from './NotVolunteer';
import { Volunteer } from './Volunteer';

interface Props {
  list: {
    label: string;
    href?: string;
  }[];
}

export function MobileNav({ list }: Props) {
  return (
    <div className="block lg:hidden">
      <Popover>
        <Popover.Button
          className={clsx(
            'relative z-50 w-6 h-5 transition duration-500 ease-in-out',
            'transform rotate-0 cursor-pointer group focus:outline-none',
          )}
          aria-label="Toggle Navigation"
        >
          {({ open }) => <MenuIcon open={open} />}
        </Popover.Button>

        <Transition
          as={Fragment}
          enter="duration-300 ease-out"
          enterFrom="opacity-0 -translate-y-full"
          enterTo="opacity-100 translate-y-0"
          leave="duration-200 ease-in"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 -translate-y-full"
        >
          <Popover.Panel
            as="div"
            className={clsx(
              'absolute inset-x-0 top-0 z-40 w-screen px-4 py-16',
              'overflow-y-scroll bg-gradient-to-tr from-purple-600 to-purple-600 sm:px-8',
            )}
          >
            {({ close }) => (
              <div className="flex flex-col items-center justify-center w-full h-full">
                <div className="flex flex-col items-center w-full mx-auto space-y-6 justify-evenly">
                  {list.map((menu) => (
                    <Fragment key={`mobile-link-${menu.label}`}>
                      {menu.label !== '봉사활동' && (
                        <NotVolunteer menu={menu} />
                      )}
                    </Fragment>
                  ))}
                </div>

                <hr className="w-full my-8 border-purple-200 sm:my-10 border-opacity-30" />

                <div className="w-full max-w-md mx-auto">
                  <p
                    className={clsx(
                      'text-lg font-semibold tracking-wider text-center',
                      'text-purple-200 uppercase sm:text-left',
                    )}
                  >
                    봉사활동
                  </p>
                  <div
                    className={clsx(
                      'grid gap-4 mt-4 justify-items-center',
                      'sm:justify-items-start sm:grid-cols-2 sm:gap-x-8',
                    )}
                  >
                    <Volunteer year="2024" close={() => close()} />
                    <Volunteer year="2023" close={() => close()} />
                    <Volunteer year="2022" close={() => close()} />
                    <Volunteer year="2021" close={() => close()} />
                  </div>
                </div>
              </div>
            )}
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  );
}
