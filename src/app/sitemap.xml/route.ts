import { NextResponse } from 'next/server';
import db from '@/helpers/server/database';

export async function GET() {
  const hanuries = await db.hanuri.findMany({
    select: { id: true, updatedAt: true }
  });

  const baseUrl = 'https://hanuri.or.kr';
  const urls = hanuries.map(
    (item) => `
      <url>
        <loc>${baseUrl}/hanuri/${item.id}</loc>
        <lastmod>${item.updatedAt.toISOString().split('T')[0]}</lastmod>
      </url>
    `
  ).join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls}
    </urlset>
  `;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
} 