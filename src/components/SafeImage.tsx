"use client";

import React, { useState, useEffect } from "react";
import Image, { ImageProps } from "next/image";
import { Camera, LucideIcon } from "lucide-react";

interface SafeImageProps extends Omit<ImageProps, "onError"> {
  fallbackName: string;
  fallbackIcon?: LucideIcon;
}

export default function SafeImage({
  fallbackName,
  fallbackIcon: CustomIcon,
  src,
  alt,
  ...props
}: SafeImageProps) {
  const [hasError, setHasError] = useState(false);
  const Icon = CustomIcon || Camera;

  // Reset error state if src changes
  useEffect(() => {
    setHasError(false);
  }, [src]);

  if (hasError || !src) {
    return (
      <div className="absolute inset-0 bg-gray-100/90 flex flex-col items-center justify-center p-4 text-center select-none border border-gray-200/50 w-full h-full rounded-[inherit] overflow-hidden">
        {/* Light grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(rgba(0,0,0,0.5) 1px, transparent 1px)",
            backgroundSize: "16px 16px"
          }}
        />
        <Icon className="w-8 h-8 text-gray-400 mb-2 flex-shrink-0" />
        <span className="font-poppins text-[11px] font-bold text-gray-500 tracking-wide leading-snug max-w-[90%] truncate">
          Foto {fallbackName}
        </span>
        <span className="font-poppins text-[8px] uppercase tracking-widest text-gray-400 mt-1 font-semibold">
          IPIN MOTOR
        </span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      {...props}
      onError={() => setHasError(true)}
    />
  );
}
