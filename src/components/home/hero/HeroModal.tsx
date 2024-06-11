'use client';

import { Fragment } from 'react';
import { Transition, Dialog } from '@headlessui/react';
import { useAtom } from 'jotai';
import { HeroVideoOpen } from '@/helpers/client/states';

export function HeroModal() {
  const [modal, setModal] = useAtom(HeroVideoOpen);

  return (
    <Transition appear show={modal} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 w-full h-full px-4 overflow-hidden transition duration-150 ease-linear"
        aria-modal="true"
        onClose={() => setModal(false)}
      >
        <Transition.Child
          as={Fragment}
          enter="transition ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-50"
          leave="transition ease-in duration-200"
          leaveFrom="opacity-50"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 w-screen h-screen transition-opacity duration-300 ease-linear bg-black opacity-50" />
        </Transition.Child>
        <div className="flex items-center justify-center w-auto min-h-screen mx-auto">
          <Transition.Child
            as={Fragment}
            enter="transition ease-out duration-300"
            enterFrom="opacity-0 scale-95 translate-y-24"
            enterTo="opacity-100 scale-100 translate-y-0"
            leave="transition ease-out duration-200"
            leaveFrom="opacity-100 scale-100 translate-y-0"
            leaveTo="opacity-0 scale-95 translate-y-24"
          >
            <Dialog.Panel className="w-full max-w-6xl max-h-full overflow-auto bg-white rounded-2xl">
              <div className="relative aspect-w-9 aspect-h-9">
                <iframe
                  className="absolute w-full h-full"
                  src="https://www.youtube.com/embed/mq6ZgYBh4to?si=pj3XFMHnRBZpf2ok"
                  title="Video"
                  allowFullScreen
                />
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
