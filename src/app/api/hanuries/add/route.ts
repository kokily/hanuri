import { NextRequest, NextResponse } from 'next/server';
import db from '@/helpers/server/database';

export async function POST(req: NextRequest) {
  const payload = (await req.json()) as AddHanuriPayload;

  const hanuri = await db.hanuri.create({
    data: {
      ...payload,
    },
  });

  return NextResponse.json(hanuri);
}
