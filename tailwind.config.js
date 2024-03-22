/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#04471C",
        white: "#F9FBFA",
        black: "#0D120F",
      },
      fontFamily: {
        "hanken-grotesk": ["Hanken Grotesk", "sans-serif"],
        "bebas-neue": ["Bebas Neue", "sans-serif"],
      },
      fontSize: {
        sm: [
          "0.5625rem",
          {
            lineHeight: "120%",
          },
        ],
        md: [
          "0.875rem",
          {
            lineHeight: "120%",
          },
        ],
        lg: [
          "1.4375rem",
          {
            lineHeight: "120%",
            fontWeight: "600",
          },
        ],
        xl: [
          "2.3125rem",
          {
            lineHeight: "120%",
          },
        ],
        "2xl": [
          "3.6875rem",
          {
            lineHeight: "100%",
          },
        ],
        "desktop-sm": [
          "0.625rem",
          {
            lineHeight: "120%",
          },
        ],
        "desktop-md": [
          "1rem",
          {
            lineHeight: "120%",
          },
        ],
        "desktop-lg": [
          "1.625rem",
          {
            lineHeight: "120%",
            fontWeight: "600",
          },
        ],
        "desktop-xl": [
          "2.625rem",
          {
            lineHeight: "120%",
          },
        ],
        "desktop-2xl": [
          "4.250rem",
          {
            lineHeight: "100%",
          },
        ],
      },
    },
  },
  plugins: [],
};
