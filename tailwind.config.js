/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#6366f1",
        secondary: "#8b5cf6",
        accent: "#06b6d4",
        success: "#10b981",
        warning: "#f59e0b",
        danger: "#ef4444",
      },
    },
  },
  plugins: [],
};
