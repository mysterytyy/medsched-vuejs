/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {},
      fontFamily:{
        'sans': ['Open Sans', 'system-ui'],
        'serif': ['ui-serif', 'Georgia'],
        'mono': ['ui-monospace', 'SFMono-Regular'],
        'inter': ['Inter'],
        'open-sans': ['Open Sans']
        }
    },  
    plugins: [],
  }