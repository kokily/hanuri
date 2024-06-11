import Image from 'next/image';
import Link from 'next/link';
import logo from '/public/logo.webp';
import { ContactItem } from './ContactItem';

export function Contact() {
  const ContactList = [
    {
      title: '후원계좌',
      content: '농협 355-0082-3684-43',
      icon: 'registered',
      bg: 'bg-rose-200',
    },
    {
      title: '주소지',
      content: '천호동 221-1',
      icon: 'mapPin',
      bg: 'bg-yellow-400',
    },
    {
      title: '이메일',
      content: 'xogml18131@hanmail.net',
      icon: 'mail',
      bg: 'bg-purple-200',
    },
  ];

  return (
    <div className="hidden px-4 lg:block sm:px-6">
      <div className="relative max-w-screen-xl py-5 mx-auto border-b border-purple-200/30">
        <div className="flex items-center justify-between">
          <div className="flex-grow-0 flex-shrink-0 w-60">
            <Link href="/">
              <Image src={logo} alt="하누리봉사회" className="h-auto" />
            </Link>
          </div>

          <ul className="flex ml-8 lg:space-x-6 xl:space-x-16">
            {ContactList.map((item) => (
              <ContactItem
                key={item.title}
                title={item.title}
                content={item.content}
                icon={item.icon}
                bg={item.bg}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
