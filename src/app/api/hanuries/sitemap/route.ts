import { NextRequest, NextResponse } from 'next/server';
import db from '@/helpers/server/database';

export async function POST(_: NextRequest) {
  const sitemaps = await db.hanuri.findMany();

  if (!sitemaps || sitemaps.length < 1) {
    throw new Error('사이트맵을 생성할 수 없습니다.');
  }

  return NextResponse.json(sitemaps);
}
