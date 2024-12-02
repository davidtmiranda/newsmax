import { AdvertorialContent } from "../types/advertorial";
import SectionRenderer from "./sections/SectionRenderer";

type Props = {
  content: AdvertorialContent;
};

export default function MainContent({ content }: Props) {
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

  return (
    <article className={`article-text ${layoutClass}`}>
      <div className="text-lg text-gray-700 mb-6">{content.meta.date}</div>
      <div className={spacingClass}>
        {sortedSections.map((section, index) => (
          <SectionRenderer key={index} section={section} />
        ))}
      </div>
    </article>
  );
}
