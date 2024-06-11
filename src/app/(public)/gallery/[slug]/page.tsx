'use client';

import { ListGallery } from '@/components/gallery/ListGallery';
import { useListGalleries } from '@/helpers/client/hooks/useListGalleries';

export default function ListGalleryPage() {
  const props = useListGalleries();

  return <ListGallery {...props} />;
}
