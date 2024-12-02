import { OrderedSection, SectionGroup } from "../../types/advertorial";
import BenefitsSection from "./BenefitsSection";
import ClientSideSection from "./ClientSideSection";
import HeaderSection from "./HeaderSection";
import ImageSection from "./ImageSection";
import ParagraphSection from "./ParagraphSection";
import QuoteSection from "./QuoteSection";
import TestimonialBlockSection from "./TestimonialBlockSection";

type Props = {
  section: OrderedSection | SectionGroup;
};

export default function SectionRenderer({ section }: Props) {
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
            />
          ))}
        </div>
      </div>
    );
  }

  const orderedSection = section as OrderedSection;

  if (orderedSection.type === "cta") {
    return <ClientSideSection section={orderedSection} />;
  }

  switch (orderedSection.type) {
    case "header":
      return <HeaderSection {...orderedSection} />;
    case "paragraph":
      return <ParagraphSection {...orderedSection} />;
    case "image":
      return <ImageSection {...orderedSection} />;
    case "quote":
      return <QuoteSection {...orderedSection} />;
    case "benefits":
      return <BenefitsSection {...orderedSection} />;
    case "testimonialBlock":
      return <TestimonialBlockSection {...orderedSection} />;
    default:
      return null;
  }
}
