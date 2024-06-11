import type { MouseEvent, ReactNode } from 'react';
import Link from 'next/link';
import clsx from 'clsx';

const variantStyles: { [key: string]: string } = {
  primaryClassName: 'text-purple-900 bg-yellow-500 hover:bg-yellow-600',
  secondaryClassName:
    'text-purple-900 bg-purple-200 hover:text-white hover:bg-purple-600',
  accentClassName: 'text-white bg-purple-600 hover:bg-purple-500',
};

const sizeStyles: { [key: string]: string } = {
  smClassName: 'px-5 py-2.5 text-base',
  lgClassName: 'px-8 py-3.5 text-lg',
};

interface Props {
  variant?: 'primary' | 'secondary' | 'accent';
  size?: 'sm' | 'lg';
  className?: string;
  href?: string;
  type?: string;
  children: ReactNode;
  onClick?: (e: MouseEvent) => void;
}

export function Button({
  variant,
  size,
  className,
  href,
  type,
  children,
  onClick,
  ...rest
}: Props) {
  const htmlProps = rest as any;

  className = clsx(
    'font-medium relative leading-normal inline-flex items-center justify-center duration-300 ease-in-out rounded-full outline-none group',
    variantStyles[`${variant}ClassName`],
    sizeStyles[`${size}ClassName`],
    className,
  );

  return href ? (
    <Link href={href} className={className} {...htmlProps}>
      {children}
    </Link>
  ) : (
    <button className={className} {...htmlProps} onClick={onClick}>
      {children}
    </button>
  );
}
