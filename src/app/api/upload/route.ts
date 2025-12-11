import { NextRequest, NextResponse } from 'next/server';
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import moment from 'moment';
import sharp from 'sharp';

export async function POST(req: NextRequest) {
  try {
    const data = await req.formData();
    const file: File | null = data.get('file') as unknown as File;
  
    const client = new S3Client({
      region: 'ap-northeast-2',
      credentials: {
        accessKeyId: process.env.ACCESS_KEY_ID!,
        secretAccessKey: process.env.SECRET_ACCESS_KEY!,
      },
    });
  
    const originalFilename = file.name.replaceAll('_', '');
    const updateFileName = `${moment().format('YYYYMMDDHHmm')}${originalFilename.trim()}`;
    const fileNameWithoutExt = updateFileName.split('.')[0];
    const fileName = `${fileNameWithoutExt}.webp`;
  
    if (!file) {
      throw new Error('파일 업로드 실패');
    } else {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const body = await sharp(buffer)
        .webp({
          quality: 85,
          effort: 6,
        })
        .toBuffer();
  
      const command = new PutObjectCommand({
        Bucket: process.env.S3_BUCKET,
        Key: fileName, 
        Body: body,
        ContentType: 'image/webp',
      });
  
      await client.send(command);
  
      return NextResponse.json({
        url: `https://${process.env.S3_BUCKET}/${fileName}`,
      });
    }  
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: '파일 업로드 실패' }, { status: 500 });
  }
}
