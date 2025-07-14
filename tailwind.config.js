/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ["Pretendard", "sans-serif"],
        dohyeon: ["Do Hyeon", "sans-serif"],
        bitcount: ["Bitcount Grid Double", "system-ui"],
      }
    },
  },
  plugins: [],
}

