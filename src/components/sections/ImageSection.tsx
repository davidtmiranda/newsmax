"use client";

import { useCtaUrl } from "../../contexts/CtaContext";
import { ImageSection as ImageSectionType } from "../../types/advertorial";

export default function ImageSection({
  src,
  alt,
  caption,
  position = "center",
}: ImageSectionType) {
  const { ctaUrl } = useCtaUrl();

  const containerStyles = {
    left: "float-left mr-6 mb-6",
    center: "mx-auto mb-8",
    right: "float-right ml-6 mb-6",
  };

  return (
    <figure className={`max-w-2xl ${containerStyles[position]}`}>
      <a href={ctaUrl}>
        <img
          src={src}
          alt={alt}
          className="w-full h-auto rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
        />
      </a>
      {caption && (
        <figcaption className="mt-2 text-sm text-gray-600 text-center">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
