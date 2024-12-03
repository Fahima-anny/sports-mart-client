/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      "luxury",
       "bumblebee",
       { 
        bumblebee: {
          // eslint-disable-next-line no-undef
          ...require("daisyui/src/theming/themes")["bumblebee"],
          primary: "black",
          // secondary: "teal",
        },
      }
      ],
  },
  theme: {
    extend: {},
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('daisyui'),
  ],
}

