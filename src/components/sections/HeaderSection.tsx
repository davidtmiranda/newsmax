import { HeaderSection as HeaderSectionType } from "../../types/advertorial";

export default function HeaderSection({
  headline,
  subheadline,
}: HeaderSectionType) {
  return (
    <header className="mb-8">
      <h1 className="text-4xl font-bold font-heading mb-4 text-black">
        {headline}
      </h1>
      {subheadline && (
        <h2 className="text-xl text-gray-600 font-heading">{subheadline}</h2>
      )}
    </header>
  );
}
