/**
 * Design Tokens - JavaScript version for Tailwind config compatibility
 * TypeScript version with types is available at lib/theme.ts
 */

module.exports = {
  theme: {
    colors: {
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
      background: "#FFFFFF",
      foreground: "#000000",
      neutral: {
        50: "#FAFAFA",
        200: "#E5E5E5",
      },
    },

    fonts: {
      serif: '"PP Fragment Serif", serif',
      sans: '"Suisse Int\'l Regular", sans-serif',
      mono: '"Suisse Int\'l Mono", monospace',
      "pp-fragment": '"PP Fragment Serif", serif',
    },

    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "13px": "0.8125rem",
      "90px": "5.625rem",
    },

    fontWeight: {
      thin: "100",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
    },

    lineHeight: {
      none: "1",
      tight: "1.25",
      snug: "1.375",
      normal: "1.5",
      relaxed: "1.625",
      loose: "2",
      "100%": "100%",
    },

    letterSpacing: {
      tighter: "-0.05em",
      tight: "-0.025em",
      normal: "0em",
      wide: "0.025em",
      wider: "0.05em",
      widest: "0.1em",
    },

    spacing: {
      container: {
        maxWidth: "1440px",
      },
      section: {
        px: {
          mobile: "2rem",
          desktop: "5rem",
        },
        py: {
          mobile: "3rem",
          desktop: "6rem",
        },
      },
      gaps: {
        small: "0.75rem",
        base: "1rem",
        medium: "1.5rem",
        large: "2rem",
        xl: "3rem",
        "64px": "4rem",
      },
    },

    borderRadius: {
      none: "0",
      sm: "0.25rem",
      md: "0.5rem",
      lg: "1rem",
      xl: "1.5rem",
      full: "9999px",
    },

    shadows: {
      sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
      base: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
      md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
      lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
    },

    transitions: {
      duration: {
        fast: "75ms",
        default: "150ms",
        normal: "300ms",
        slow: "500ms",
        slower: "3000ms",
      },
      easing: {
        linear: "linear",
        in: "cubic-bezier(0.4, 0, 1, 1)",
        out: "cubic-bezier(0, 0, 0.2, 1)",
        "in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
        custom: "cubic-bezier(1, 0.17, 0.16, 0.88)",
      },
      default: "all 0.3s ease",
      fast: "all 0.15s ease",
      slow: "all 0.5s ease",
    },

    breakpoints: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },

    zIndex: {
      base: "0",
      dropdown: "1000",
      sticky: "1020",
      fixed: "1030",
      modalBackdrop: "1040",
      modal: "1050",
      popover: "1060",
      tooltip: "1070",
      header: "50",
    },

    animations: {
      scroll: {
        duration: "15s",
        timing: "linear",
        iteration: "infinite",
      },
    },

    framer: {
      fontFamily: '"Suisse Int\'l Regular", sans-serif',
      fontSize: "16px",
      fontWeight: "400",
      lineHeight: "100%",
      letterSpacing: "0em",
      paragraphSpacing: "20px",
      openTypeFeatures: '"blwf" on, "cv09" on, "cv03" on, "cv04" on, "cv11" on',
    },
  },
};
