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
        '4xl': '0 6px 40px 0px rgba(68, 70, 73, 0.25)',
        '5xl': '-10px 10px 30px 0px rgba(0, 0, 0, 0.25)',
        'Input': '10px 20px 50px 0px rgba(0, 0, 0, 0.15)',
      }
    },
  },
  plugins: [],
};
export default config;
