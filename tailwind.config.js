/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        civinity: {
          green: "#0B5D43",
          greenDark: "#073E2D",
          greenLight: "#EAF3EF",
          red: "#C81E2B",
          redLight: "#FDF1F2",
          ink: "#10211B",
          muted: "#4A5E57",
          surface: "#F6F8F7",
          border: "#DCE4E0",
        },
      },
      fontFamily: {
        sans: ['"Inter"', '"Hind Siliguri"', "system-ui", "sans-serif"],
        heading: ['"Hind Siliguri"', '"Inter"', "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
