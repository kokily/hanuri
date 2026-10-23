import Link from "next/link";
import clsx from "clsx";
import { logoutAction } from "@/lib/actions/auth";

interface AdminTabProps {
  pathname: string;
}

export function AdminTab({ pathname }: AdminTabProps) {
  const isWrite = pathname === "/write" || pathname.startsWith("/write/");

  return (
    <>
      <Link href="/write">
        <div className="group relative p-0.5">
          <span
            className={clsx(
              "relative z-10 text-lg font-medium",
              isWrite
                ? "text-purple-600"
                : "text-purple-700 duration-300 ease-in-out group-hover:text-purple-600",
            )}
          >
            글 작성
          </span>
          <span
            className={clsx(
              "absolute -right-1 bottom-0 -left-1 h-1.5 origin-bottom scale-x-0 rounded-lg bg-yellow-400",
              isWrite
                ? "scale-x-100"
                : "duration-300 ease-in-out group-hover:scale-x-100",
            )}
          />
        </div>
      </Link>

      <form action={logoutAction}>
        <button
          type="submit"
          className="group relative cursor-pointer p-0.5 outline-none focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2"
        >
          <span className="relative z-10 text-lg font-medium text-purple-700 duration-300 ease-in-out group-hover:text-purple-600">
            로그아웃
          </span>
        </button>
      </form>
    </>
  );
}
