import { Suspense } from 'react';
import { ListGallery } from '@/components/gallery/ListGallery';
import { ListGalleryClient } from '@/components/gallery/ListGalleryClient';

interface Props {
  params: {
    slug: string;
  };
}

// 빌드 시점에 가능한 연도들을 미리 생성
export async function generateStaticParams() {
  return [
    { slug: '2024' },
    { slug: '2025' },
  ];
}

function LoadingFallback() {
  return (
    <section className="relative w-full px-4 py-16 sm:py-24 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-25 to-white">
      <div className="max-w-2xl mx-auto lg:max-w-screen-xl">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">로딩 중...</p>
        </div>
      </div>
    </section>
  );
}

export default async function ListGalleryPage({ params }: Props) {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <ListGalleryClient slug={params.slug} />
    </Suspense>
  );
}
