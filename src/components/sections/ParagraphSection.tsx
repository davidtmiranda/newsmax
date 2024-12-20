"use client";

import { useCtaUrl } from "../../contexts/CtaContext";
import { ParagraphSection as ParagraphSectionType } from "../../types/advertorial";

export default function ParagraphSection({
  text,
  style = "normal",
  clickableWords = [],
}: ParagraphSectionType) {
  const { ctaUrl } = useCtaUrl();

  const styles = {
    normal: "text-lg text-[#1a1a1a]", // Added text-lg for better readability
    highlight: "text-lg font-medium text-primary",
    quote: "text-lg italic text-[#262626]",
  };

  const renderText = () => {
    let result = text;

    // First handle bold text
    const boldPattern = /\*\*(.*?)\*\*/g;
    result = result.replace(
      boldPattern,
      '<strong class="font-bold">$1</strong>'
    );

    // Then handle clickable words if they exist
    if (clickableWords.length > 0) {
      clickableWords.forEach((word) => {
        const regex = new RegExp(`(${word})`, "gi");
        result = result.replace(
          regex,
          `<a href="${ctaUrl}" class="text-red-600 font-extrabold hover:underline">$1</a>`
        );
      });
    }

    return <span dangerouslySetInnerHTML={{ __html: result }} />;
  };

  return <p className={`mb-6 ${styles[style]}`}>{renderText()}</p>;
}
