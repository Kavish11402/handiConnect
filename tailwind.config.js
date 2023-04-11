/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:
          {
            'SignInImg' : "url('/Assets/Images/SignIn.jpg')",
            'ForgotPassImg' : "url('/Assets/Images/ForgotPass.jpg')",
            'ChatBG' : "url('/Assets/Images/chatBG.jpg')"
          }
    },
  },
  plugins: [],
}