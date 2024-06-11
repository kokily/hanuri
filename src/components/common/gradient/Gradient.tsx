import clsx from 'clsx';

export function Gradient() {
  return (
    <div
      className={clsx(
        'w-full h-32 sm:h-40 lg:h-44',
        'bg-gradient-to-b from-purple-50 to-white',
      )}
    />
  );
}
