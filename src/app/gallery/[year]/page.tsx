import { GalleryList } from "@/components/gallery/gallery-list";
import { GALLERY_YEARS } from "@/lib/gallery-years";
import { listHanuriesByYear } from "@/lib/queries";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface GalleryPageProps {
  params: Promise<{ year: string }>;
}

// Nav에 있는 연도만 허용
function isAllowedYear(year: string) {
  return (GALLERY_YEARS as readonly string[]).includes(year);
}

export async function generateMetadata({
  params,
}: GalleryPageProps): Promise<Metadata> {
  const { year } = await params;

  return {
    title: `${year}년 봉사활동 | 하누리 봉사회`,
    description: `하누리 봉사회 ${year}년 봉사활동 갤러리입니다.`,
  };
}

export default async function GalleryYearPage({ params }: GalleryPageProps) {
  const { year } = await params;

  if (!isAllowedYear(year)) {
    notFound();
  }

  const initialItems = await listHanuriesByYear(year);

  return <GalleryList year={year} initialItems={initialItems} />;
}
