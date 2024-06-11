import clsx from 'clsx';
import Link from 'next/link';

interface Props {
  year: string;
  close: () => void;
}

export function Volunteer({ year, close }: Props) {
  return (
    <Link
      href={`/gallery/${year}`}
      key={`mobile-dropdown-${year}`}
      className="sm:justify-self-end"
      onClick={() => close()}
    >
      <div className="relative p-0.5 group">
        <span
          className={clsx(
            'relative z-10 text-xl font-medium duration-300',
            'ease-in-out text-purple-50 group-hover:text-white',
          )}
        >
          {year}년
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
