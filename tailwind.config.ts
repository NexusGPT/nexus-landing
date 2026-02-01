import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        nexus: {
          black: "#000000",
          white: "#FFFFFF",
          orange: "#FF6600",
          grey: {
            light: "#999999",
            medium: "#666666",
          },
          blue: {
            light: "#E6F3FF",
            cyan: "#B3E5FC",
          },
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
        "pp-fragment": ["var(--font-pp-fragment)", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
