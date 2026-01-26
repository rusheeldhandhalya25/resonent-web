/** @type {import('tailwindcss').Config} */
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
        background: "#002556",
        primary: "#1B86F8",
        'text-default': "#EDF6FF",
        'outline-light': "#1C4B84",
        card: "#053876",
        'primary-disable': "#DEEFFC",
        'text-disable': "#9AADC4",
        'outline-dark': "#708FB5",
        tag: "#28558B",
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
