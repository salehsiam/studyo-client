/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#093B3B",
        secondary: "#2B5959",
        accent: "#E8F6F3",
        neutral: "#FFFFFF",
        background: "#F8FAFC",
        text: "#1E293B",
      },
    },
  },
  daisyui: {
    themes: ["light", "dark"],
  },
  plugins: [require("daisyui")],
};
