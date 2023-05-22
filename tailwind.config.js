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
        keyframes:
            {
                WarningColorKeyFrames:
                    {
                        '0% , 100%': {color: 'rgb(255,0,0)'},
                        '50%': {color: 'rgb(0,0,255)'},
                    },
            },
        animation:
            {
                'TextWarningColor': 'WarningColorKeyFrames 0.4s  infinite'
            },
        backgroundImage:
            {
                'SignInImg' : "url('/Assets/Images/SignIn.jpg')",
                'ForgotPassImg' : "url('/Assets/Images/ForgotPass.jpg')",
                'ChatBG' : "url('/Assets/Images/postPlaceholder-4.jpg')"
            }
    },
  },
  plugins: [
      require('@headlessui/tailwindcss'),
  ],
}