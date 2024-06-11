import { NextRequest, NextResponse } from 'next/server';
import db from '@/helpers/server/database';

export async function GET(_: NextRequest, { params: { id } }: any) {
  const hanuri = await db.hanuri.findUnique({ where: { id } });

  if (!hanuri) {
    throw new Error('해당 게시글이 없습니다.');
  } else {
    return NextResponse.json(hanuri);
  }
}
