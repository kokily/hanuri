import { useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { useInfiniteQuery, useQueryClient } from '@tanstack/react-query';
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

export function useListGalleries(slug: string) {
  const router = useRouter();
  const queryClient = useQueryClient();

  const { data, fetchNextPage, isLoading, isError } = useInfiniteQuery({
    initialPageParam: '',
    queryKey: ['hanuries', slug],
    queryFn: ({ pageParam }) =>
      listHanuriesAPI({ cursor: pageParam, year: slug }),
    getNextPageParam: (data) =>
      data && data.length === 10 ? data[data.length - 1].id : undefined,
    staleTime: 5 * 60 * 1000, // 5분
    gcTime: 10 * 60 * 1000, // 10분
    refetchOnWindowFocus: false,
    refetchOnMount: false,
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
    isLoading,
    isError,
  };
}
