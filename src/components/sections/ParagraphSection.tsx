import { useCtaUrl } from "../../contexts/CtaContext";
import { ParagraphSection as ParagraphSectionType } from "../../types/advertorial";

export default function ParagraphSection({
  text,
  style = "normal",
  clickableWords = [],
}: ParagraphSectionType) {
  const { ctaUrl } = useCtaUrl();

  const styles = {
    normal: "text-gray-900",
    highlight: "text-lg font-medium text-primary",
    quote: "text-lg italic text-gray-700",
  };

  const renderText = () => {
    if (!clickableWords || clickableWords.length === 0) {
      return text;
    }

    let result = text;
    clickableWords.forEach((word) => {
      const regex = new RegExp(`(${word})`, "gi");
      result = result.replace(
        regex,
        `<a href="${ctaUrl}" class="text-blue-600 hover:underline">$1</a>`
      );
    });

    return <span dangerouslySetInnerHTML={{ __html: result }} />;
  };

  return <p className={`mb-6 ${styles[style]}`}>{renderText()}</p>;
}
