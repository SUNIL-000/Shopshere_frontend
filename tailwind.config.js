// Use ES6 import syntax for the entire configuration file

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"),
    // require('@tailwindcss/forms'),
    require('preline/plugin'),
  ], 
  daisyui: {
    themes: ["light", "cupcake"],
  },
};