
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      //...
      boxShadow: {
        'el-shadow': '0px 12px 32px 4px rgba(0,0,0,0.04),0px 8px 20px rgba(0,0,0,0.08)',
      },
    },
  },
};
