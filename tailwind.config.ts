import type { Config } from "tailwindcss";
// Use JavaScript version for Tailwind config compatibility
const { theme: tokens } = require("./lib/theme.js");

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
        nexus: tokens.colors.nexus,
        neutral: tokens.colors.neutral,
      },
      fontFamily: {
        serif: [tokens.fonts.serif],
        sans: [tokens.fonts.sans],
        mono: [tokens.fonts.mono],
        "pp-fragment": [tokens.fonts["pp-fragment"]],
      },
      fontSize: {
        ...tokens.fontSize,
      },
      fontWeight: {
        ...tokens.fontWeight,
      },
      lineHeight: {
        ...tokens.lineHeight,
      },
      letterSpacing: {
        ...tokens.letterSpacing,
      },
      borderRadius: {
        ...tokens.borderRadius,
      },
      boxShadow: {
        ...tokens.shadows,
      },
      transitionDuration: {
        ...tokens.transitions.duration,
      },
      transitionTimingFunction: {
        ...tokens.transitions.easing,
      },
      zIndex: {
        ...tokens.zIndex,
      },
      maxWidth: {
        container: tokens.spacing.container.maxWidth,
      },
    },
  },
  plugins: [],
};
export default config;
