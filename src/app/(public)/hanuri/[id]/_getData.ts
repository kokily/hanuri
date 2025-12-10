import db from "@/helpers/server/database";
import { Hanuri } from "@prisma/client";
// import { client } from '@/helpers/client/hooks/client';

export const getData = async (id: string): Promise<Hanuri> => {
  // const response = await client.get(`/hanuries/${id}`);
  const hanuri = await db.hanuri.findUnique({ where: { id } });

  if (!hanuri) {
    throw new Error('Failed to fetch data');
  }

  return hanuri;
};
