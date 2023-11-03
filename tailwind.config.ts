import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: { Karla: ["Karla", "sans-serif"] },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        DarkViolet: "hsl(256, 26%, 20%)",
        GrayishBlue: " hsl(216, 30%, 68%)",
        VeryDarkViolet: "hsl(270, 9%, 17%)",
        DarkGrayishViolet: " hsl(273, 4%, 51%)",
        VeryLightGray: " hsl(0, 0%, 98%)",
      },
    },
  },
  plugins: [],
};
export default config;
