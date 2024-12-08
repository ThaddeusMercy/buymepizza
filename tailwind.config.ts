import type { Config } from "tailwindcss";

export default {
  darkMode: ['class'],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'pizza-red': 'var(--pizza-red)',
        'pizza-yellow': 'var(--pizza-yellow)',
        'pizza-green': 'var(--pizza-green)',
        'pizza-purple': 'var(--pizza-purple)',
      },
      fontFamily: {
        athletic: ['Athletic', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
