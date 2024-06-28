/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "gray":"#E7E7E7",
        "pinky":"#FCB4A5",
        "gray-1":"#B0B0B0",
        "gray-2":"#888888",
        "blacki":"#3D3D3D",
        "gray-3":"#5D5D5D",
        "pinky-2":"#FEF4F2"
      }
    },
  },
  plugins: [],
}

