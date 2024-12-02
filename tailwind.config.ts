import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#c41e3a", // Rich red color
        background: "#f8fafc",
        foreground: "#171717",
        secondary: "#993366", // cor secundária usada em alguns textos
      },
      fontFamily: {
        sans: ["Arial", "Helvetica", "sans-serif"],
        heading: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
    },
  },
  plugins: [],
};

export default config;
