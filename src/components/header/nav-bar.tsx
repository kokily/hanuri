import Image from "next/image";
import Link from "next/link";
import { auth } from "@/auth";
import { WebNav } from "./nav/web-nav";
import { NavList } from "@/lib/nav-list";
import { MobileNav } from "./nav/mobile-nav";

export async function NavBar() {
  const session = await auth();
  const isLoggedIn = !!session?.user;

  return (
    <div className="px-4 sm:px-6">
      <nav className="mx-auto flex max-w-screen-xl items-center pt-5">
        <div className="flex w-full items-center justify-between">
          <WebNav list={NavList} isLoggedIn={isLoggedIn} />

          <div className="block w-48 shrink-0 grow-0 sm:w-52 lg:hidden">
            <Link href="/">
              <Image
                src="/logo.webp"
                alt="하누리 봉사회"
                width={208}
                height={70}
                priority
                className="w-auto h-auto"
              />
            </Link>
          </div>

          <MobileNav list={NavList} isLoggedIn={isLoggedIn} />
        </div>
      </nav>
    </div>
  );
}
