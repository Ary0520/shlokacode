import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          background: "#F7F3E9",
          text: "#2A4834",
          accent: "#A7C4BC",
          border: "#4A6741",
          hover: "#E6D5B8",
        },
        dark: {
          background: "#1A1A1A",
          text: "#F7F3E9",
          accent: "#4A6741",
          border: "#2A4834",
          hover: "#A7C4BC",
        },
      },
    },
  },
  plugins: [],
};

export default config; 