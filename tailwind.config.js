/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        syne: ["Syne", "sans-serif"],
        montserrat: ["Montserrat"],
      },
      screens: {
        mobile: "375px",
        // => @media (min-width: 375px) { ... }
        desktop: "640px",
        // => @media (min-width: 640px) { ... }
      },
    },
  },
  plugins: [],
};
