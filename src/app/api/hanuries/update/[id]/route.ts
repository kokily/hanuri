import { NextRequest, NextResponse } from 'next/server';
import db from '@/helpers/server/database';

export async function PATCH(req: NextRequest, { params: { id } }: any) {
  const payload = (await req.json()) as AddHanuriPayload;

  const hanuri = await db.hanuri.update({
    where: { id },
    data: {
      ...payload,
      updatedAt: new Date(),
    },
  });

  return NextResponse.json(hanuri);
}
