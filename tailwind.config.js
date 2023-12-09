/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray75: "#E6E9ED",
      },
      fontSize: {
        96: "96px",
        128: "128px",
        56: "56px",
        76: "76px",
        34: "34px",
      },
      height: {
        1123: "1000px",
        700: "700px",
      },
    },
  },
  plugins: [],
};
