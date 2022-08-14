const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
    './storage/framework/views/*.php',
    './resources/views/**/*.blade.php',
    './resources/js/**/*.jsx',
    './resources/js/**/*.tsx',
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', ...defaultTheme.fontFamily.sans],
      },
    },
    colors: {
      'white': '#ffffff',
      'black': {
        100: '#3a3b45',
        200: '#ffffff'
      },
      'green': {
        100: '#97C777',
        200: '#698c52',
      },
    },
  },

  plugins: [require('@tailwindcss/forms')],
};
