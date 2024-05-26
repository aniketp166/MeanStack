/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'mp_blueLight': 'var(--blueLight)',
        'mp_red': 'var(--red)',
        'mp_grayDark': 'var(--grayDark)',
        'mp_grayLight': 'var(--grayLight)',
        'mp_blueDark': 'var(--blueDark)',
        'mp_green': 'var(--green)',
        'mp_yellow': 'var(--yellow)',
      },
    },
  },
  plugins: [],
};
