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
    },
  },
  plugins: [],
};
