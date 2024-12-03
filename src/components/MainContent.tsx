"use client";

import { useCtaUrl } from "@/contexts/CtaContext";
import { AdvertorialContent } from "../types/advertorial";
import SectionRenderer from "./sections/SectionRenderer";

type Props = {
  content: AdvertorialContent;
};

export default function MainContent({ content }: Props) {
  const { getTrackedUrl } = useCtaUrl();
  const { sections, settings } = content;

  // Sort sections by order if specified
  const sortedSections = sections.sort((a, b) => {
    if ("order" in a && "order" in b) {
      return (a.order || 0) - (b.order || 0);
    }
    return 0;
  });

  const spacingClass = {
    compact: "space-y-4",
    normal: "space-y-8",
    wide: "space-y-12",
  }[settings?.spacing || "normal"];

  const layoutClass = {
    default: "max-w-none",
    narrow: "max-w-2xl mx-auto",
    wide: "max-w-4xl mx-auto",
  }[settings?.layout || "default"];

  // Process sections to add tracked URLs
  const processedSections = sortedSections.map((section) => {
    if ("url" in section) {
      return {
        ...section,
        url: getTrackedUrl(section.url),
      };
    }
    if ("clickableWords" in section && section.type === "paragraph") {
      return {
        ...section,
        trackedUrl: getTrackedUrl(content.ctaUrl),
      };
    }
    return section;
  });

  return (
    <article className={`article-text ${layoutClass}`}>
      <div className="text-lg text-gray-700 mb-6">{content.meta.date}</div>
      <div className={spacingClass}>
        {processedSections.map((section, index) => (
          <SectionRenderer
            key={index}
            section={section}
            getTrackedUrl={getTrackedUrl}
            defaultCtaUrl={content.ctaUrl}
          />
        ))}
      </div>
    </article>
  );
}
