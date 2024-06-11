import Link from 'next/link';
import clsx from 'clsx';

interface Props {
  href: string;
  label: string;
  pathname: string;
}

export function NotVolunteer({ href, label, pathname }: Props) {
  return (
    <Link href={href}>
      <div className="relative p-0.5 group">
        <span
          className={clsx(
            'relative z-10 text-lg font-medium',
            pathname === href
              ? 'text-purple-600'
              : 'duration-300 ease-in-out group-hover:text-purple-600 text-purple-700',
          )}
        >
          {label}
        </span>
        <span
          className={clsx(
            'absolute bottom-0 h-1.5 origin-bottom transform scale-x-0 bg-yellow-400 rounded-lg -left-1 -right-1',
            pathname === href
              ? 'sacle-x-100'
              : 'duration-300 ease-in-out group-hover:scale-x-100',
          )}
        />
      </div>
    </Link>
  );
}
