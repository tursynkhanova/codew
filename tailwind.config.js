/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#14181F",
        default: "#FF6F60",
      },
      fontFamily: {
        neue: ["var(--font-neue)", "Montserrat"],
      },
    },
  },
  plugins: [],
};
