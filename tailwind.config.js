/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Configure your color palette here
        primary: "#5c6ac4",
        btnColor: "rgb(249 115 22)",
      },
      spacing: {
        kSpace_5: "5px",
        kSpace_10: "10px",
        kSpace_20: "20px",
      },
    },
    // corePlugins: {
    //   preflight: false,
    // }
    fontSize: {
      kFontVerySmall: "12px",
      kFontSmall: "15px",
      kFontNormal: "18px",
      kFontlarge: "20px",
    },
  },
  plugins: [],
}

