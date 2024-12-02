"use client";

import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function ClientLayout({ children }: Props) {
  return <div className="min-h-screen bg-background">{children}</div>;
}
