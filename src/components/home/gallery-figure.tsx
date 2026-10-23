import Image from "next/image";
import { images } from "@/lib/gallery-images";

interface GalleryFigureProps {
  image: (typeof images)[number];
  className: string;
  figureClassName?: string;
  sizes: string;
}

export function GalleryFigure({
  image,
  className,
  figureClassName,
  sizes,
}: GalleryFigureProps) {
  return (
    <figure
      className={`group relative aspect-square w-full cursor-pointer hover:z-50 ${figureClassName ?? ""}`}
      data-src={image.src}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        className={`absolute inset-0 rounded-2xl object-cover object-center shadow-2xl duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-0 ${className}`}
        sizes={sizes}
      />
    </figure>
  );
}
