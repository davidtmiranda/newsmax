import { SidebarSection } from "../../types/advertorial";
import SidebarContent from "./SidebarContent";

type Props = {
  sections?: SidebarSection[];
  position?: "left" | "right";
  width?: "narrow" | "wide";
};

export default function Sidebar(props: Props) {
  if (!props.sections?.length) return null;
  return <SidebarContent {...props} />;
}
