/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        redhat: ["Red Hat Display", "sans-serif"],
      },
      fontSize: {
        base: ["16px", "21.17px"],
        base2: ["16px", "19.25px"],
        lg2: ["16px", "19.25px"],
        lg3: ["20px", "32px"],
        xlg: ["32px", "51.2px"],
        lg4: ["24px", "38.4px"],
        lg5: ["24px", "31.75px"],
        xl64: ["64px", "84.67px"],
        base3: ["48px", "64px"],
      },
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }
  
        md: "768px",
        // => @media (min-width: 768px) { ... }
  
        lg: "1024px",
        // => @media (min-width: 1024px) { ... }
  
        xl: "1280px",
        // => @media (min-width: 1280px) { ... }
  
        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },  
    },
  },
  plugins: [],
}

