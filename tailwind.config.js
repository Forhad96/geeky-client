import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      colors: {
        cDark: "#1B2730",
        cPrimary: "#1DA1F2",
        ////
        primary: "#4a90e2",
        secondary: "#50e3c2",
        error: "#ff4d4f",
        success: "#52c41a",
        light: {
          background: "#ffffff",
          text: "#333333",
          card: "#f9f9f9",
          border: "#e0e0e0",
          input: "#f0f0f0",
          buttonText: "#ffffff",
        },
        dark: {
          background: "#1e1e1e",
          text: "#e0e0e0",
          card: "#2c2c2c",
          border: "#333333",
          input: "#333333",
          buttonText: "#ffffff",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
