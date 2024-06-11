import type { MouseEvent, MutableRefObject } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import dotsLargeGrid from '/public/svg/dots-large-grid.svg';
import dotsGrid from '/public/svg/dots-grid.svg';
import dotsStrip from '/public/svg/dots-strip.svg';
import { Button } from '../common/button/Button';

interface Props {
  usernameRef: MutableRefObject<null>;
  passwordRef: MutableRefObject<null>;
  onLogin: (e: MouseEvent) => void;
}

export function Login({ usernameRef, passwordRef, onLogin }: Props) {
  return (
    <section className="px-4 pb-12 overflow-hidden lg:pt-24 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-25 to-white">
      <div className="max-w-xl mx-auto lg:grid lg:grid-cols-2 lg:gap-10 xl:gap-32 lg:max-w-screen-xl ">
        {/* Hero header */}
        <div className="py-16 lg:py-32">
          <div>
            <span className="inline-block px-4 py-2 font-medium text-purple-700 bg-purple-200 rounded-full shadow-md -rotate-1">
              관리자 로그인
            </span>
          </div>
          <p className="max-w-lg mt-3 text-xl leading-relaxed text-purple-800">
            로그인하여 하누리 봉사활동을 업로드 해주세요
          </p>
        </div>

        {/* Side View */}
        <div className="relative">
          <Image
            src={dotsLargeGrid}
            className="absolute lg:hidden -right-16 -top-12 sm:-top-16 w-80 lg:left-14 lg:-top-16 lg:w-36 opacity-60"
            alt=""
            priority
          />
          <Image
            src={dotsGrid}
            className="absolute hidden w-40 opacity-75 lg:block -right-16 -top-16 lg:left-14 lg:-top-16 lg:w-36"
            alt=""
          />
          <Image
            src={dotsStrip}
            className="absolute hidden w-20 rotate-90 opacity-75 lg:block -right-16 top-1/2"
            alt=""
          />

          {/* Login Form */}
          <div className="relative z-10 w-full px-4 py-10 mx-auto bg-white shadow-xl rounded-3xl lg:mr-0 lg:ml-auto sm:p-16 lg:p-12 xl:p-14">
            <div>
              <h3 className="text-2xl font-bold text-purple-900">
                관리자 로그인
              </h3>
            </div>

            {/* Action Form */}
            <form className="mt-8">
              <div key={`login-form-username`} className={clsx('mt-6')}>
                <label
                  htmlFor="username"
                  className="ml-0.5 text-purple-900 font-medium text-sm"
                >
                  로그인
                </label>

                <input
                  ref={usernameRef}
                  onChange={(e: any) => {
                    usernameRef.current = e.target.value;
                  }}
                  type="text"
                  id="username"
                  name="username"
                  placeholder="username"
                  required
                  className="
                    w-full p-4 mt-2 text-sm font-medium text-purple-700 placeholder-purple-700 duration-300 ease-in-out
                    border-2 outline-none h-14 placeholder-opacity-70 rounded-2xl border-purple-50 focus:border-purple-200
                    focus:ring-purple-200 focus:outline-none
                  "
                />
              </div>
              <div key={`login-form-password`} className={clsx('mt-6')}>
                <label
                  htmlFor="password"
                  className="ml-0.5 text-purple-900 font-medium text-sm"
                >
                  비밀번호
                </label>

                <input
                  ref={passwordRef}
                  onChange={(e: any) => {
                    passwordRef.current = e.target.value;
                  }}
                  type="password"
                  id="password"
                  name="password"
                  placeholder="password"
                  required
                  className="
                    w-full p-4 mt-2 text-sm font-medium text-purple-700 placeholder-purple-700 duration-300 ease-in-out
                    border-2 outline-none h-14 placeholder-opacity-70 rounded-2xl border-purple-50 focus:border-purple-200
                    focus:ring-purple-200 focus:outline-none
                  "
                />
              </div>

              <div className="flex justify-start mt-6">
                <Button onClick={onLogin}>로그인</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
