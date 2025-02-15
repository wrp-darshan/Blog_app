import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#04091e",
        foreground: "#f6214b",
        hover: "#f6214b",
      },
      screens: {
        xs: '425px',  // xs (extra small, for mobile)
        sm: '576px',  // sm (small, for tablets)
        md: '768px',  // md (medium, for larger tablets)
        lg: '992px',  // lg (large, for laptops)
        xl: '1200px', // xl (extra large, for large screens)
        xxl: '1400px' // xxl (extra extra large, for extra large screens)
      },
    },
  },
  plugins: [],
} satisfies Config;
