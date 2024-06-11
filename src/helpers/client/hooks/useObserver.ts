import { useCallback, useEffect, useRef, useState } from 'react';

interface Props {
  onIntersect: IntersectionObserverCallback;
  root?: null;
  rootMargin?: string;
  threshold?: number;
}

export function useObserver({
  onIntersect,
  root,
  rootMargin = '0px',
  threshold = 0,
}: Props) {
  const [target, setTarget] = useState<HTMLElement | null | undefined>(null);

  useEffect(() => {
    if (!target) return;

    const observer: IntersectionObserver = new IntersectionObserver(
      onIntersect,
      { root, rootMargin, threshold },
    );
    observer.observe(target);

    return () => observer.unobserve(target);
  }, [onIntersect, root, rootMargin, target, threshold]);

  return { setTarget };
}

export function useIsMounted() {
  const mountedRef = useRef(false);
  const isMounted = useCallback(() => mountedRef.current, []);

  useEffect(() => {
    mountedRef.current = true;

    return () => {
      mountedRef.current = false;
    };
  }, []);

  return isMounted;
}
