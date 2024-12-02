export type Meta = {
  date: string;
  author?: string;
  category?: string;
};

export type ContentSection =
  | HeaderSection
  | ParagraphSection
  | ImageSection
  | QuoteSection
  | BenefitsSection
  | CTASection
  | TestimonialBlockSection;

export type HeaderSection = {
  type: "header";
  headline: string;
  subheadline?: string;
};

export type ParagraphSection = {
  type: "paragraph";
  text: string;
  style?: "normal" | "highlight" | "quote";
  clickableWords?: string[]; // Add this line
};

export type ImageSection = {
  type: "image";
  src: string;
  alt: string;
  caption?: string;
  position?: "left" | "center" | "right";
};

export type QuoteSection = {
  type: "quote";
  text: string;
  author: string;
  image?: string;
  highlight?: boolean;
};

export type BenefitsSection = {
  type: "benefits";
  items: Array<{
    text: string;
    icon?: "check" | "star" | "circle";
  }>;
};

export type CTASection = {
  type: "cta";
  text: string;
  url: string;
  style?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
};

export type TestimonialBlockSection = {
  type: "testimonialBlock";
  title: string;
  testimonials: Array<{
    quote: string;
    author: string;
    image?: string;
    rating?: number;
  }>;
};

export type SidebarSection = InfoBoxSection | ProductHighlightSection;

export type InfoBoxSection = {
  type: "infoBox";
  title: string;
  items: string[];
};

export type ProductHighlightSection = {
  type: "productHighlight";
  image: string;
  price: string;
  discount?: string;
  cta: string;
};

export type Comment = {
  author: string;
  avatar: string;
  date: string;
  content: string;
  likes?: number;
  replies?: Array<Omit<Comment, "avatar" | "likes" | "replies">>;
};

export type SectionGroup = {
  type: "group";
  title?: string;
  layout?: "default" | "columns" | "grid";
  sections: ContentSection[];
};

export type OrderedSection = ContentSection & {
  order?: number;
  group?: string;
  hidden?: boolean;
};

export type AdvertorialContent = {
  meta: Meta;
  sections: (OrderedSection | SectionGroup)[];
  ctaUrl: string;
  sidebar?: {
    sections: SidebarSection[];
    position?: "left" | "right";
    width?: "narrow" | "wide";
  };
  comments?: {
    enabled: boolean;
    title: string;
    list: Comment[];
    allowNewComments?: boolean;
  };
  settings?: {
    theme?: "light" | "dark";
    layout?: "default" | "wide" | "narrow";
    spacing?: "compact" | "normal" | "wide";
  };
};
