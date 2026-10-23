import type { IconName } from "@/components/common/icon/Icon";

type ContactListType = {
  title: string;
  content: string;
  icon: IconName;
  bg: string;
};

export const ContactList: ContactListType[] = [
  {
    title: "후원계좌",
    content: "농협 355-0082-3684-43",
    icon: "registered",
    bg: "bg-rose-200",
  },
  {
    title: "주소지",
    content: "천호동 221-1",
    icon: "mapPin",
    bg: "bg-yellow-400",
  },
  {
    title: "이메일",
    content: "xogml18131@hanmail.net",
    icon: "mail",
    bg: "bg-purple-200",
  },
];
