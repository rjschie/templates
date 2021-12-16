module.exports = {
  content: ['./src/**/*.{html,js,ts,jsx,tsx,svelte}'],
  theme: {
    fontFamily: {
      display: ['sans-serif'],
      body: ['sans-serif'],
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        n0: '#ffffff',
        n50: '#f7f7f8',
        n100: '#eff0f0',
        n200: '#dfe0e1',
        n300: '#c8c9cb',
        n500: '#8e9195', // base
        n700: '#545759',
        n900: '#252627',
        n1000: '#121212',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
