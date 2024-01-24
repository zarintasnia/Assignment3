/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {},
    },
    plugins: [],
} 
  
module.exports = {
  // other configurations
  plugins: [
    require('tailwindcss-filters'),
    // other plugins
  ],
}
