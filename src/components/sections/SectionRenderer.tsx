import { OrderedSection, SectionGroup } from "@/types/advertorial";
import ClickableText from "../ClickableText";
import BenefitsSection from "./BenefitsSection";
import HeaderSection from "./HeaderSection";
import ImageSection from "./ImageSection";
import QuoteSection from "./QuoteSection";
import TestimonialBlockSection from "./TestimonialBlockSection";

type Props = {
  section: any;
  getTrackedUrl: (url: string) => string;
  defaultCtaUrl: string;
};

export default function SectionRenderer({
  section,
  getTrackedUrl,
  defaultCtaUrl,
}: Props) {
  if ((section as OrderedSection).hidden) return null;

  if ((section as SectionGroup).type === "group") {
    const group = section as SectionGroup;
    return (
      <div className={`section-group ${group.layout || "default"}`}>
        {group.title && <h3 className="group-title">{group.title}</h3>}
        <div className="group-content">
          {group.sections.map((subSection, index) => (
            <SectionRenderer
              key={index}
              section={subSection as OrderedSection}
              getTrackedUrl={getTrackedUrl}
              defaultCtaUrl={defaultCtaUrl}
            />
          ))}
        </div>
      </div>
    );
  }

  const orderedSection = section as OrderedSection;

  switch (orderedSection.type) {
    case "header":
      return <HeaderSection {...orderedSection} />;
    case "paragraph":
      return (
        <ClickableText
          text={section.text}
          clickableWords={section.clickableWords}
          url={section.trackedUrl || defaultCtaUrl}
          style={section.style}
        />
      );
    case "image":
      return <ImageSection {...orderedSection} />;
    case "quote":
      return <QuoteSection {...orderedSection} />;
    case "benefits":
      return <BenefitsSection {...orderedSection} />;
    case "testimonialBlock":
      return <TestimonialBlockSection {...orderedSection} />;
    case "cta":
      return (
        <button
          onClick={() => (window.location.href = section.url)}
          className={`cta-button ${section.style}`}
        >
          {section.text}
        </button>
      );
    default:
      return null;
  }
}
