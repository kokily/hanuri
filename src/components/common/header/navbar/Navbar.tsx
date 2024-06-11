import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../../../public/logo.webp';
import { WebNav } from './web/WebNav';
import { MobileNav } from './mobile/MobileNav';

export function Navbar() {
  const NavList = [
    { label: '홈으로', href: '/' },
    { label: '소개글', href: '/about' },
    { label: '봉사활동' },
  ];

  return (
    <div className="px-4 sm:px-6">
      <nav className="flex items-center max-w-screen-xl pt-5 mx-auto">
        <div className="flex items-center justify-between w-full">
          <WebNav list={NavList} />

          <div className="flex-grow-0 flex-shrink-0 block w-48 lg:hidden sm:w-52">
            <Link href="/">
              <Image src={logo} alt="하누리 봉사회" className="h-auto" />
            </Link>
          </div>

          <MobileNav list={NavList} />
        </div>
      </nav>
    </div>
  );
}
