export function getUrlParams(): string {
  if (typeof window === "undefined") return "";

  const params = new URLSearchParams(window.location.search);
  return params.toString();
}

export function appendParamsToUrl(url: string, params: string): string {
  if (!params) return url;

  const hasQueryParams = url.includes("?");
  const connector = hasQueryParams ? "&" : "?";

  return `${url}${connector}${params}`;
}
