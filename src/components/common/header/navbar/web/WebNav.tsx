'use client';

import { Fragment } from 'react';
import { usePathname } from 'next/navigation';
import { signOut, useSession } from 'next-auth/react';
import { AdminTab } from './AdminTab';
import { NotVolunteer } from './NotVolunteer';
import { Volunteer } from './Volunteer';

interface Props {
  list: {
    label: string;
    href?: string;
  }[];
}

export function WebNav({ list }: Props) {
  const pathname = usePathname();
  const { data: user } = useSession();

  const onLogout = async () => {
    await signOut({ redirect: true, callbackUrl: '/' });
  };

  return (
    <div className="items-center justify-between hidden lg:flex md:space-x-6 lg:space-x-10">
      {list.map((menu) => (
        <Fragment key={`desktop-link-${menu.label}`}>
          {menu.label !== '봉사활동' ? (
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
      {user && <AdminTab onLogout={onLogout} pathname={pathname} />}
    </div>
  );
}
