"use client";

import { useCtaUrl } from "../contexts/CtaContext";

type ClickableTextProps = {
  text: string;
  clickableWords?: string[];
  url: string;
  style?: "normal" | "highlight" | "quote";
};

export default function ClickableText({
  text,
  clickableWords = [],
  url,
  style = "normal",
}: ClickableTextProps) {
  const { getTrackedUrl } = useCtaUrl();

  const styles = {
    normal: "text-lg text-[#1a1a1a]",
    highlight: "text-lg font-medium text-primary",
    quote: "text-lg italic text-[#262626]",
  };

  const renderText = () => {
    let result = text;

    // Handle bold text
    const boldPattern = /\*\*(.*?)\*\*/g;
    result = result.replace(
      boldPattern,
      '<strong class="font-bold">$1</strong>'
    );

    // Handle clickable words
    if (clickableWords.length > 0) {
      const trackedUrl = getTrackedUrl(url);
      clickableWords.forEach((word) => {
        const regex = new RegExp(`(${word})`, "gi");
        result = result.replace(
          regex,
          `<a href="${trackedUrl}" class="text-red-600 font-extrabold hover:underline cursor-pointer">$1</a>`
        );
      });
    }

    return <span dangerouslySetInnerHTML={{ __html: result }} />;
  };

  return <p className={`mb-6 ${styles[style]}`}>{renderText()}</p>;
}
