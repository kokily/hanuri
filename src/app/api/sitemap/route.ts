import { NextResponse } from 'next/server';
import db from '@/helpers/server/database';

export async function GET() {
  const posts = await db.hanuri.findMany();
  const baseUrl = 'https://hanuri.site';
  const urls = posts.map(post => {
    const dateObj = post.date || post.createdAt;
    const lastmod = typeof dateObj === 'string' ? dateObj.slice(0, 10) : dateObj.toISOString().slice(0, 10);
    return `  <url>\n    <loc>${baseUrl}/hanuri/${post.id}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`;
  }).join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
} 