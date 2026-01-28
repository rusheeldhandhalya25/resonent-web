/** @type {import('tailwindcss').Config} */

import lineClamp from "@tailwindcss/line-clamp";


export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      screens: {
        xs: "0px",
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1400px",
        "3xl": "1921px",
      },

      colors: {
        backgroundClr: "#002556",
        primaryDefaultClr: "#1B86F8",
        textDefaultClr: "#EDF6FF",
        lightOutlineClr: "#1C4B84",
        cardClr: "#053876",
        primaryDisableClr: "#DEEFFC",
        textDisableClr: "#9AADC4",
        darkOutlineClr: "#708FB5",
        tagClr: "#28558B",
        cardGradient: "linear-gradient(0deg, #002556, #002556), linear-gradient(240.05deg, rgba(4, 47, 105, 0.3) 0.05%, rgba(53, 144, 242, 0.3) 21.74%, rgba(53, 144, 242, 0.3) 73.07%, rgba(4, 47, 105, 0.3) 101.64%)"
      },
     
      backgroundImage: {
        expertiseGradient:
          "linear-gradient(250.91deg, #002556ED -7.76%, #1B86F8ED 16.68%, #1B86F8ED 74.53%, #002556ED 106.73%), linear-gradient(0deg, #00000033, #00000033)",
       
      },

      
      boxShadow: {
        expertisePill: "0px 25px 46.6px 0px #0000000D",
      },

      fontWeight: {
        1: "100",
        2: "200",
        3: "300",
        4: "400",
        5: "500",
        6: "600",
        7: "700",
        8: "800",
        9: "900",
      },

      fontSize: {
        16: ["1rem", "1rem"], // 16,100
        17: ["1.063rem", "1.488rem"], // 17,140
        19: ["1.188rem", "1.188rem"], // 19,100
        20: ["1.25rem", "1.25rem"], // 20,100
        24: ["1.5rem", "1.5rem"], // 24,100
        28: ["1.75rem", "1.75rem"], // 28,100
        30: ["1.875rem", "1.875rem"], // 30,100
        40: ["2.5rem", "2.5rem"], // 40,100
        60: ["3.75rem", "3.75rem"], // 60,100
        80: ["5rem", "6.5rem"], // 80,130
      },

      fontFamily: {
          heading: ["Montserrat Alternates", "sans-serif"],
          body: ["Instrument Sans", "sans-serif"],
        },  

      plugins: [],
    },
  },
};
