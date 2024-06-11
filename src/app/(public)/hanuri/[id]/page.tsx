import { Metadata } from 'next';
import { getData } from './_getData';
import { Hanuri } from '@/components/hanuri/Hanuri';

export async function generateMetadata({
  params,
}: {
  params: { id: any };
}): Promise<Metadata> {
  const hanuri = await getData(params.id);

  return {
    title: hanuri.title,
    description: hanuri.body.substring(0, 120).replace(/<[^>]*>?/g, ''),
    keywords: hanuri.tags.toString(),
    openGraph: {
      images: [hanuri.thumbnail],
    },
  };
}

export default async function HanuriPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const data = await getData(id);

  return <Hanuri hanuri={data} />;
}
