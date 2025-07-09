"use client";

import { useEffect, useState, useRef } from 'react';
import Masonry from 'react-masonry-css';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

interface Props {
  body: string;
  title: string;
}

export function HanuriBody(props: Props) {
  const [images, setImages] = useState<string[]>([]);
  const [textContent, setTextContent] = useState<string>('');
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // HTML에서 이미지 태그들을 추출
    const parser = new DOMParser();
    const doc = parser.parseFromString(props.body, 'text/html');
    const imgElements = doc.querySelectorAll('img');
    
    const extractedImages: string[] = [];
    imgElements.forEach((img) => {
      const src = img.getAttribute('src');
      if (src) {
        extractedImages.push(src);
      }
    });

    // 이미지 태그들을 제거한 텍스트 콘텐츠 생성
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = props.body;
    const imgTags = tempDiv.querySelectorAll('img');
    imgTags.forEach((img) => img.remove());
    const cleanText = tempDiv.innerHTML;

    setImages(extractedImages);
    setTextContent(cleanText);
  }, [props.body]);

  useEffect(() => {
    let lightGalleryInstance: any;
    if (images.length > 0 && galleryRef.current) {
      (async () => {
        const lg = (await import('lightgallery')).default;
        
        // Masonry가 완전히 렌더링된 후 LightGallery 초기화
        setTimeout(() => {
          lightGalleryInstance = lg(galleryRef.current!, {
            selector: '.gallery-item',
            download: false,
            counter: true,
            enableDrag: true,
            enableSwipe: true,
            speed: 500,
            thumbnail: true,
            zoom: true,
            dynamic: true,
            dynamicEl: images.map((imageSrc, index) => ({
              src: imageSrc,
              subHtml: `[${props.title}] ${index + 1}/${images.length}`,
            })),
          });
        }, 100);
      })();
    }
    return () => {
      if (lightGalleryInstance) lightGalleryInstance.destroy && lightGalleryInstance.destroy();
    };
  }, [images, props.title]);

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-[1200px] mx-auto px-2 sm:px-4">
        {/* 텍스트 - 배경 없이, 폰트만 강조 */}
        <div className="mb-10 mt-14 sm:mt-16 lg:mt-24 text-xl sm:text-2xl leading-relaxed font-medium text-gray-900">
          <div
            dangerouslySetInnerHTML={{ __html: textContent }}
          />
        </div>
        {/* Masonry 이미지 갤러리 */}
        {images.length > 0 && (
          <div className="mt-8" ref={galleryRef}>
            <Masonry
              breakpointCols={{
                default: 2,
                1100: 2,
                700: 1,
              }}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column"
            >
              {images.map((imageSrc, index) => (
                <div key={index} className="mb-4">
                  <a
                    href={imageSrc}
                    className="gallery-item block"
                    data-src={imageSrc}
                    data-sub-html={`[${props.title}] ${index + 1}/${images.length}`}
                    data-index={index}
                    onClick={e => e.preventDefault()}
                  >
                    <img
                      src={imageSrc}
                      alt={props.title}
                      className="w-full h-auto rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                      loading="lazy"
                    />
                  </a>
                </div>
              ))}
            </Masonry>
          </div>
        )}
      </div>
    </div>
  );
}
