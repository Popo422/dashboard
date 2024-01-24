/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        "primary-font": "Nunito Sans",
      },
      fontSize: {
        xxs: "0.65rem",
      },
      colors: {
        "primary-gray": "#E5E7EB",
        "primary-gray-100": "#F8F8F8",
        "primary-gray-500": "#929292",
        "secondary-gray": "#929292",
        "secondary-gray-100": "#F5F5F5",
        "primary-blue": "#194175",
        "primary-blue-500": "#42638E",
        "primary-blue-400": "#6C86A7",
        "primary-blue-300": "#96A8C0",
        "primary-blue-200": "#C0CBD9",
        "primary-blue-100": "#E5F4FF",
        "secondary-blue": "#0288D1",
        "secondary-blue-200": "#DAEDFB",
        "secondary-blue-100": "#F0F6FF",
        "primary-green": "#8CC63E",
        "primary-green-500": "#2F704D",
        "primary-green-400": "#85DA84",
        "primary-green-300": "#CAE5A7",
        "primary-green-200": "#DFEFCA",
        "primary-green-100": "#F4F9ED",
        "secondary-green": "#0FAF62",
        "secondary-green-100": "#E7F7EF",

        "inv-grey": "#555555",
      },
    },
  },
  plugins: [],
};
