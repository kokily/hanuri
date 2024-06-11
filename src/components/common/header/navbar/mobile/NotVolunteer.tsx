import Link from 'next/link';
import clsx from 'clsx';

interface Props {
  menu: { label: string; href?: string | undefined };
}

export function NotVolunteer({ menu }: Props) {
  return (
    <Link href={menu.href!} onClick={() => close()}>
      <div className="relative p-0.5 group">
        <span
          className={clsx(
            'relative z-10 text-2xl font-medium duration-300',
            'ease-in-out text-purple-50 group-hover:text-white',
          )}
        >
          {menu.label}
        </span>
        <span
          className={clsx(
            'absolute bottom-0 h-1.5 duration-300 ease-in-out origin-bottom transform scale-x-0',
            'bg-yellow-400 rounded-lg -left-1 -right-1 group-hover:scale-x-100',
          )}
        />
      </div>
    </Link>
  );
}
