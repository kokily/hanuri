import "server-only";
import { prisma } from "@/lib/server/db";

export const PAGE_SIZE = 10;

export async function listHanuriesByYear(year: string, cursor?: string) {
  return prisma.hanuri.findMany({
    where: { year },
    ...(cursor
      ? {
          cursor: { id: cursor },
          skip: 1,
        }
      : {}),
    take: PAGE_SIZE,
    orderBy: [{ date: "desc" }, { createdAt: "desc" }],
    select: {
      id: true,
      title: true,
      thumbnail: true,
      year: true,
      date: true,
      createdAt: true,
    },
  });
}

export async function getHanuriById(id: string) {
  return prisma.hanuri.findUnique({ where: { id } });
}
