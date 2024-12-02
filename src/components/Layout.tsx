import "../styles/sections.css";
import { AdvertorialContent } from "../types/advertorial";

type Props = {
  children: React.ReactNode;
  settings?: AdvertorialContent["settings"];
};

export default function Layout({ children, settings = {} }: Props) {
  const { theme = "light", spacing = "normal" } = settings;

  return (
    <div
      data-theme={theme}
      className={`min-h-screen bg-background spacing-${spacing}`}
    >
      {children}
    </div>
  );
}
