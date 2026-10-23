"use client";

import { useActionState } from "react";
import clsx from "clsx";
import { loginAction } from "@/lib/actions/auth";
import { Button } from "../common/button/Button";

export default function Login() {
  const [error, formAction, pending] = useActionState(loginAction, null);

  return (
    <section className="from-purple-25 bg-gradient-to-b to-purple-50 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-md">
        <h1 className="h3 text-center text-purple-900">관리자 로그인</h1>
        <p className="mt-2 text-center text-purple-800/80">
          하누리 봉사회 관리자 전용입니다.
        </p>
        <div className="mt-8 rounded-2xl bg-white p-6 shadow-lg sm:p-8">
          <form action={formAction} className="space-y-5">
            <div>
              <label
                htmlFor="password"
                className="mb-1.5 block text-sm font-medium text-purple-900"
              >
                비밀번호
              </label>

              <input
                type="password"
                name="password"
                required
                autoComplete="current-password"
                className={clsx(
                  "w-full rounded-xl border border-purple-200 px-4 py-2.5",
                  "outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200",
                )}
              />
            </div>

            {error ? (
              <p className="mt-1 text-sm text-red-600">{error}</p>
            ) : null}

            <Button
              type="submit"
              variant="accent"
              size="lg"
              className="w-full cursor-pointer"
            >
              {pending ? "확인 중..." : "로그인"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
