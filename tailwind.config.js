/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    fontFamily: {
      sans: ['"Gothic A1"', "sans-serif"],
      serif: ["Toren", "serif"],
    },
    extend: {
      colors: {
        black: "#1e1e1e",
        cream: "#FEFFF6",
        red: "#FF4E3C",
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
      },
    },
  },
  plugins: [],
};
