/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './app/js/script.js', './app/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
      // Primary
      // (intro and email sign up background)
      Dark_Blue_intro: 'hsl(217, 28%, 15%)',
      // (main background)
      Dark_Blue_main: 'hsl(218, 28%, 13%)',
      // (footer background)
      Dark_Blue_footer: 'hsl(216, 53%, 9%)',
      // (testimonials background)
      Dark_Blue_testimonials: 'hsl(219, 30%, 18%)',
      
      // Accent
      // (inside call-to-action gradient)
      Cyan: 'hsl(176, 68%, 64%)',
      //  (inside call-to-action gradient)
      Blue: 'hsl(198, 60%, 50%)',
      //  (error)
      Light_Red: 'hsl(0, 100%, 63%)',
      
      // Neutral
      White: 'hsl(0, 0%, 100%)',
      },

      fontFamily: {
        Open_Sans:"'Open Sans', sans-serif",
        Raleway:"'Raleway', sans-serif",
      },

      backgroundImage: {
        'Curvy-mobile': "url(../assets/images/bg-curvy-mobile.svg)",
        'Curvy-desktop': "url(../assets/images/bg-curvy-desktop.svg)",
      },

      screens: {
        'mids': '900px',
        'thrids': '1200px',
        'frids': '1440px'
      }
    },
  },
  plugins: [],
}

