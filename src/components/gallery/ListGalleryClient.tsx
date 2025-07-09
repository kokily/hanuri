'use client';

import { ListGallery } from '@/components/gallery/ListGallery';
import { useListGalleries } from '@/helpers/client/hooks/useListGalleries';

interface Props {
  slug: string;
}

export function ListGalleryClient({ slug }: Props) {
  const props = useListGalleries(slug);

  return <ListGallery {...props} />;
} 