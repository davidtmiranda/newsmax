"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { appendParamsToUrl, getUrlParams } from "../utils/urlParams";

type CtaContextType = {
  ctaUrl: string;
  getTrackedUrl: (url: string) => string;
};

// Create context with a meaningful default value
const CtaContext = createContext<CtaContextType>({
  ctaUrl: "",
  getTrackedUrl: (url: string) => url,
});

type CtaProviderProps = {
  children: ReactNode;
  ctaUrl: string;
};

export function CtaProvider({ children, ctaUrl }: CtaProviderProps) {
  const [urlParams, setUrlParams] = useState("");

  useEffect(() => {
    setUrlParams(getUrlParams());
  }, []);

  const getTrackedUrl = (url: string) => {
    return appendParamsToUrl(url, urlParams);
  };

  const value = {
    ctaUrl: getTrackedUrl(ctaUrl),
    getTrackedUrl,
  };

  return <CtaContext.Provider value={value}>{children}</CtaContext.Provider>;
}

export function useCtaUrl() {
  const context = useContext(CtaContext);
  if (!context) {
    throw new Error("useCtaUrl must be used within a CtaProvider");
  }
  return context;
}
