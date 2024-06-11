import { NextRequest, NextResponse } from 'next/server';
import db from '@/helpers/server/database';

export async function GET(req: NextRequest) {
  const url = new URL(req.nextUrl);
  const year = url.searchParams.get('year') ?? '';
  const cursor = url.searchParams.get('cursor') ?? '';
  const cursorObj = cursor === '' ? undefined : { id: cursor };
  const limit = 10;

  const hanuries = await db.hanuri.findMany({
    where: {
      year: {
        contains: year,
      },
    },
    cursor: cursorObj,
    skip: cursor !== '' ? 1 : 0,
    take: limit,
    orderBy: {
      createdAt: 'desc',
    },
  });

  return NextResponse.json(hanuries);
}
