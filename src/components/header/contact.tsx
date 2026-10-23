import Image from "next/image";
import Link from "next/link";
import { ContactItem } from "./contact-item";
import { ContactList } from "@/lib/contact-list";

export function Contact() {
  return (
    <div className="hidden px-4 sm:px-6 lg:block">
      <div className="relative mx-auto max-w-screen-xl border-b border-purple-200/30 py-5">
        <div className="flex items-center justify-between">
          <div className="w-60 shrink-0 grow-0">
            <Link href="/">
              <Image
                src="/logo.webp"
                alt="하누리봉사회"
                width={240}
                height={80}
                priority
                className="w-auto h-auto"
              />
            </Link>
          </div>

          <ul className="ml-8 flex lg:space-x-6 xl:space-x-16">
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
