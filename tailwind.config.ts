import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'pace-green': '#066839',
        'pace-orange': '#f79b20',
      },
      fontFamily: {
        sans: ['"Montserrat"', 'sans-serif'],
        cursive: ['"Dancing Script"', 'cursive'],
      }
    },
  },
  plugins: [],
} satisfies Config;
