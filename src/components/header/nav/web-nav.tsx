"use client";

import type { NavType } from "@/lib/nav-list";
import { Fragment } from "react";
import { usePathname } from "next/navigation";
import { NotVolunteer } from "./web/not-volunteer";
import { Volunteer } from "./web/volunteer";
import { AdminTab } from "./web/admin-tab";

interface WebNavProps {
  list: NavType[];
  isLoggedIn: boolean;
}

export function WebNav({ list, isLoggedIn }: WebNavProps) {
  const pathname = usePathname();

  return (
    <div className="hidden items-center justify-between md:space-x-6 lg:flex lg:space-x-10">
      {list.map((menu) => (
        <Fragment key={`desktop-link-${menu.label}`}>
          {menu.label !== "봉사활동" ? (
            <NotVolunteer
              pathname={pathname}
              href={menu.href!}
              label={menu.label}
            />
          ) : (
            <Volunteer pathname={pathname} />
          )}
        </Fragment>
      ))}

      {isLoggedIn && <AdminTab pathname={pathname} />}
    </div>
  );
}
