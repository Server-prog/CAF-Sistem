/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  server : {
    port: 3000,
    host : true,
    cors: true,

  },
   
  theme: {
    extend: {},
  },
  plugins: [],
}