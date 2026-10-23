export type NavType = {
  label: string;
  href?: string;
};

export const NavList: NavType[] = [
  { label: "홈으로", href: "/" },
  { label: "소개글", href: "/about" },
  { label: "봉사활동" },
] as const;
