import { useMemo } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useInfiniteQuery } from '@tanstack/react-query';
import qs from 'qs';
import { client } from './client';
import { useObserver } from './useObserver';

// API
export async function listHanuriesAPI(queries: ListHanuriesQuery) {
  const queryString = qs.stringify(queries);
  const response = await client.get<Array<HanuriType>>(
    `/hanuries?${queryString}`,
  );
  return response.data;
}

export function useListGalleries() {
  const router = useRouter();
  const pathname = usePathname();

  const { data, fetchNextPage } = useInfiniteQuery({
    initialPageParam: '',
    queryKey: ['hanuries'],
    queryFn: ({ pageParam }) =>
      listHanuriesAPI({ cursor: pageParam, year: pathname.split('/')[2] }),
    getNextPageParam: (data) =>
      data && data.length === 10 ? data[data.length - 1].id : undefined,
  });

  const hanuries = useMemo(() => {
    if (!data) return [];

    return ([] as Array<HanuriType>).concat(...data.pages);
  }, [data]);

  const onReadHanuri = (id: string) => {
    router.push(`/hanuri/${id}`);
  };

  const onIntersect: IntersectionObserverCallback = ([entry]) => {
    entry.isIntersecting && fetchNextPage();
  };

  const { setTarget } = useObserver({ onIntersect });

  return {
    hanuries,
    onReadHanuri,
    setTarget,
  };
}
