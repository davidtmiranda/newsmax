"use client";

import { useCtaUrl } from "../../contexts/CtaContext";
import { CTASection as CTASectionType } from "../../types/advertorial";

export default function CTASection({
  text,
  url,
  style = "primary",
  size = "medium",
}: CTASectionType) {
  const { ctaUrl } = useCtaUrl();
  const finalUrl = url || ctaUrl;

  const styles = {
    primary: "action-button animate-pulse",
    secondary: "action-button bg-secondary hover:bg-secondary/90 animate-pulse",
  };

  const sizes = {
    small: "text-sm py-2 px-4",
    medium: "text-base py-3 px-6",
    large: "text-lg py-4 px-8",
  };

  return (
    <div className="my-8">
      <a
        href={finalUrl}
        className={`${styles[style]} ${sizes[size]} block w-full text-center`}
      >
        {text}
      </a>
    </div>
  );
}
