"use client";

import { Fragment } from "react";
import Link from "next/link";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import clsx from "clsx";
import { NavType } from "@/lib/nav-list";
import { MenuIcon } from "./mobile/menu-icon";
import { MobileNotVolunteer } from "./mobile/mobile-not-volunteer";
import { GALLERY_YEARS } from "@/lib/gallery-years";
import { MobileVolunteer } from "./mobile/mobile-volunteer";
import { logoutAction } from "@/lib/actions/auth";

interface MobileNavProps {
  list: NavType[];
  isLoggedIn: boolean;
}

export function MobileNav({ list, isLoggedIn }: MobileNavProps) {
  return (
    <div className="block lg:hidden">
      <Popover>
        {({ open, close }) => (
          <>
            <PopoverButton
              aria-label="메뉴 열기"
              className={clsx(
                "group relative z-50 h-5 w-6 cursor-pointer",
                "transition duration-500 ease-in-out outline-none",
                "focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2",
              )}
            >
              <MenuIcon open={open} />
            </PopoverButton>

            <PopoverPanel
              transition
              className={clsx(
                "absolute inset-x-0 top-0 z-40 w-screen overflow-y-auto px-4 py-16 sm:px-8",
                "bg-gradient-to-tr from-purple-600 to-purple-600",
                "transition duration-300 ease-out data-closed:-translate-y-full data-closed:opacity-0",
              )}
            >
              <div className="flex w-full flex-col items-center">
                <div className="flex w-full flex-col items-center space-y-6">
                  {list.map((menu) => (
                    <Fragment key={`mobile-link-${menu.label}`}>
                      {menu.label !== "봉사활동" && (
                        <MobileNotVolunteer menu={menu} onClose={close} />
                      )}
                    </Fragment>
                  ))}
                </div>

                <hr className="my-8 w-full border-purple-200/30 sm:my-10" />

                <div className="w-full max-w-md">
                  <p className="text-center text-lg font-semibold tracking-wider text-purple-200 uppercase sm:text-left">
                    봉사활동
                  </p>
                  <div className="mt-4 grid max-h-56 grid-cols-3 gap-2 overflow-y-auto sm:grid-cols-4">
                    {GALLERY_YEARS.map((year) => (
                      <MobileVolunteer key={year} year={year} onClose={close} />
                    ))}
                  </div>
                </div>

                {isLoggedIn && (
                  <>
                    <hr className="my-8 w-full border-purple-200/30 sm:my-10" />
                    <div className="flex flex-col items-center gap-4">
                      <Link
                        href="/write"
                        onClick={close}
                        className="text-xl font-medium text-purple-50 hover:text-white"
                      >
                        글 작성
                      </Link>
                      <form action={logoutAction}>
                        <button
                          type="submit"
                          className="cursor-pointer text-xl font-medium text-purple-50 hover:text-white"
                        >
                          로그아웃
                        </button>
                      </form>
                    </div>
                  </>
                )}
              </div>
            </PopoverPanel>
          </>
        )}
      </Popover>
    </div>
  );
}
