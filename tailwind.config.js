/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      primary: "#00FFBB",
      secondary: "#1F8066",
      lightgray: "#8B8B8B",
      darkgray: "#5A5A5A",
      background: "#1D1D1D",
      lightbackground: "#303030",
      lighttext: "#9196A5",
      darktext: "#4E525E",
      red: "#FF453A",
      orange: "#FF9F0A",
      green: "#00DE31",
      white: "#ffffff",
    },
  },
  plugins: [],
};
