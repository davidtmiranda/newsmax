"use client";

import { useCtaUrl } from "../../contexts/CtaContext";
import { SidebarSection } from "../../types/advertorial";

type SidebarPosition = "left" | "right";
type SidebarWidth = "narrow" | "wide";

type Props = {
  sections?: SidebarSection[];
  position?: SidebarPosition;
  width?: SidebarWidth;
};

export default function SidebarContent({
  sections,
  position = "right",
  width = "narrow",
}: Props) {
  const { ctaUrl } = useCtaUrl();

  if (!sections?.length) return null;

  const positionClass: Record<SidebarPosition, string> = {
    left: "order-first",
    right: "order-last",
  };

  const widthClass: Record<SidebarWidth, string> = {
    narrow: "lg:w-72",
    wide: "lg:w-96",
  };

  return (
    <aside
      className={`hidden lg:block ${positionClass[position]} ${widthClass[width]}`}
    >
      {sections.map((section, index) => (
        <div
          key={index}
          className="sticky top-4 bg-gray-50 p-6 rounded-lg mb-6"
        >
          {section.type === "infoBox" && (
            <>
              <h2 className="text-2xl font-bold mb-6">{section.title}</h2>
              <div className="space-y-4 text-lg">
                {section.items.map((item, i) => (
                  <div key={i} className="bg-white p-4 rounded">
                    {item}
                  </div>
                ))}
              </div>
            </>
          )}
          {section.type === "productHighlight" && (
            <>
              <a href={ctaUrl}>
                <img
                  src={section.image}
                  alt="Product"
                  className="w-full h-auto mb-4 rounded cursor-pointer"
                />
              </a>
              <div className="text-center">
                <div className="text-2xl font-bold">{section.price}</div>
                {section.discount && (
                  <div className="text-primary text-lg">
                    Por apenas {section.discount}
                  </div>
                )}
                <a href={ctaUrl} className="action-button mt-4 w-full block">
                  {section.cta}
                </a>
              </div>
            </>
          )}
        </div>
      ))}
    </aside>
  );
}
