"use client";

import NextImage from 'next/image';
import { IMAGES, ImageKeys } from '@/app/constants/images';

interface ImageProps {
  src: ImageKeys | string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}

export default function Image({ src, alt, ...props }: ImageProps) {
  const imageSrc = (src in IMAGES) ? IMAGES[src as ImageKeys] : src;
  
  return (
    <NextImage
      src={imageSrc}
      alt={alt}
      {...props}
    />
  );
}