import { BenefitsSection as BenefitsSectionType } from "../../types/advertorial";

export default function BenefitsSection({ items }: BenefitsSectionType) {
  const icons = {
    check: "✓",
    star: "★",
    circle: "●",
  };

  return (
    <div className="my-8 bg-gray-50 p-6 rounded-lg">
      <ul className="space-y-4">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-3">
            <span className="text-primary text-xl">
              {item.icon ? icons[item.icon] : icons.check}
            </span>
            <span className="text-gray-700">{item.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
