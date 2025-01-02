/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,vue,svg}"
  ],
  theme: {
    extend: {
      backgroundColor: {
        "greyis-blue": "hsl(223, 64%, 98%)",
        "pale-orange": "hsl(25, 100%, 94%)",
        "custom-orange": "hsl(26, 100%, 55%)",
      },
      borderColor: {
        "custom-orange": "hsl(26, 100%, 55%)",
      }
    },
  },
  plugins: [],
}

