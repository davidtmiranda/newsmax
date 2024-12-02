"use client";

import { createContext, ReactNode, useContext } from "react";

type CtaContextType = {
  ctaUrl: string;
};

// Create context with a meaningful default value
const CtaContext = createContext<CtaContextType>({ ctaUrl: "" });

type CtaProviderProps = {
  children: ReactNode;
  ctaUrl: string;
};

export function CtaProvider({ children, ctaUrl }: CtaProviderProps) {
  console.log("CtaProvider receiving URL:", ctaUrl); // Debug log
  return (
    <CtaContext.Provider value={{ ctaUrl }}>{children}</CtaContext.Provider>
  );
}

export function useCtaUrl() {
  const context = useContext(CtaContext);
  if (!context) {
    throw new Error("useCtaUrl must be used within a CtaProvider");
  }
  return context;
}
