import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        forest: "#1F3A2E",
        cream: "#F2ECE0",
        pine: "#0F1D17",
        clay: "#A9927D",
      },
      fontFamily: {
        archivo: ["var(--font-archivo)", "sans-serif"],
        jost: ["var(--font-jost)", "sans-serif"],
      },
      letterSpacing: {
        tightest2: "-0.045em",
        caps: "0.26em",
      },
      maxWidth: {
        content: "1200px",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
