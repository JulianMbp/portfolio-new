

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
        background: "var(--background)",
        foreground: "var(--foreground)",
        'azul': {
          '50': '#f0fbfb',
          '100': '#d8f1f5',
          '200': '#9fdae4',
          '300': '#84cedc',
          '400': '#4bb0c5',
          '500': '#2f94ab',
          '600': '#2a7890',
          '700': '#286276',
          '800': '#285262',
          '900': '#254554',
          '950': '#142d38',
      },
      },

    },
  },
  plugins: [],
} satisfies Config;
