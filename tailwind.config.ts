import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        abhaya: ["Abhaya Libre", "serif"],
        robotoCondensed: ["Roboto Condensed", "sans-serif"],
      },
      colors: {
        "primary-50":"#c9efc7",
        "primary-100":"#096a2e",
        "primary-200": "#b5bd11",
        // "secondary-300" : "linear-gradient(0deg, #8DB600 20%, #525150 100%)"
      },
      backgroundImage: (theme) => ({
          "gradient-primary":"linear-gradient(90deg, #c9efc7 100%, #096a2e 20%)",
          "gradient-primary-100": "radial-gradient(circle at center, #c2c2c2 0%, #fff 50%)",
          "gradient-secondary-100":"linear-gradient(90deg, rgb(99, 200, 78)0%, #525150 100%)",
          "parallex":"url('/parallex2.jpg')",

          
      }),
      content: {
        heroImage:"url(/bg-assets3.png')"
      }
    },
    screens: {
      xs: "480px",
      ssm:"600px",
      sm: "850px",
      bm: "1000px",
      md: "1060px",
    }
  },
  plugins: [],
} satisfies Config;
