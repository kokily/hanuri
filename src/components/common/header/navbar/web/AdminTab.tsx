import Link from 'next/link';
import clsx from 'clsx';
import { Button } from '@/components/common/button/Button';

interface Props {
  onLogout: () => void;
  pathname: string;
}

export function AdminTab({ onLogout, pathname }: Props) {
  return (
    <>
      <Link href="/write">
        <div className="relative p-0.5 group">
          <span
            className={clsx(
              'relative z-10 text-lg font-medium',
              pathname === 'write'
                ? 'text-purple-600'
                : 'duration-300 ease-in-out group-hover:text-purple-600 text-purple-700',
            )}
          >
            글 작성
          </span>
          <span
            className={clsx(
              'absolute bottom-0 h-1.5 origin-bottom transform scale-x-0',
              'bg-yellow-400 rounded-lg -left-1 -right-1',
              pathname === 'write'
                ? 'sacle-x-100'
                : 'duration-300 ease-in-out group-hover:scale-x-100',
            )}
          />
        </div>
      </Link>
      <Button onClick={onLogout}>
        <div className="relative p-0.5 group">
          <span className="relative z-10 text-lg font-medium">로그아웃</span>
        </div>
      </Button>
    </>
  );
}
