/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          
          "primary": "#ECD1BF",

          "secondary": "#AE4864",

          "accent": "#3A4256",

          "neutral": "#1A748A",

          "base-100": "#FFF",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}