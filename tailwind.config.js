/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4CAF50",
        secondary: "#F5F5DC",
        accent: "#283593",
        background: "#121212",
        text: "#e0f3df",
      },
    },
  },
  plugins: [require("daisyui")],
};
