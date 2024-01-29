import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: '#2A4CFF',
        secondary: '#24BAF3',
        light: '#E9F0FF',
        purple: '#803DFF',
        neutral: '#333333',
        pure: '#fff',

        dark: '#111'
      },
      boxShadow: {
        '3xl': '0 11px 16px 0px rgba(68, 70, 73, 0.07)',

        dark: '#111',

      }
    },
  },
  plugins: [],
};
export default config;
