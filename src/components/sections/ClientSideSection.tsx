"use client";

import dynamic from "next/dynamic";
import { OrderedSection } from "../../types/advertorial";

const CTASection = dynamic(() => import("./CTASection"), { ssr: false });

type Props = {
  section: OrderedSection;
};

export default function ClientSideSection({ section }: Props) {
  if (section.type === "cta") {
    return <CTASection {...section} />;
  }

  return null;
}
