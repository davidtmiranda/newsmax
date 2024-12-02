import { QuoteSection as QuoteSectionType } from "../../types/advertorial";

export default function QuoteSection({
  text,
  author,
  highlight = false,
}: QuoteSectionType) {
  return (
    <div
      className={`quote-section ${highlight ? "border-l-[6px]" : "border-l-4"}`}
    >
      <blockquote className="text-lg italic mb-3">{text}</blockquote>
      <cite className="text-gray-600 font-medium block">— {author}</cite>
    </div>
  );
}
