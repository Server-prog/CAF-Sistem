const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // ...
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    flowbite.content(),
  ],

  plugins: [
    // ...
    flowbite.plugin(),
  ],
  theme: {
   extend : {
    backgroundImage :{
      'hero-pattern' : "url('/x.svg')",
      'hero-pattern-secundary' : "url('/x2.svg')",
    },
    fontFamily:{
      'sans' :'Inter',
      'brains': 'jetBrains Mono'
    },
    screens : {
      'sm' : ''
    }
   }
  }
};