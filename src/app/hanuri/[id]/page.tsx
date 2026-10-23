import { auth } from "@/auth";
import { Hanuri } from "@/components/hanuri/hanuri";
import { getHanuriById } from "@/lib/queries";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

interface HanuriPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: HanuriPageProps): Promise<Metadata> {
  const { id } = await params;
  const hanuri = await getHanuriById(id);

  if (!hanuri) return { title: "글 없음 | 하누리 봉사회" };

  return {
    title: `${hanuri.title} | 하누리 봉사회`,
    description: hanuri.title,
  };
}

export default async function HanuriPage({ params }: HanuriPageProps) {
  const { id } = await params;
  const hanuri = await getHanuriById(id);

  if (!hanuri) notFound();

  const session = await auth();

  return <Hanuri hanuri={hanuri} canEdit={!!session?.user} />;
}
