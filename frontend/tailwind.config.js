module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // Adjust to match your project's structure
    './public/index.html',            // Include public HTML file if needed
  ],
  theme: {
    extend: {
      fontFamly:{
        "Host+Grotesk:ital":["Host+Grotesk:ital",'sans-serif']
      }
    },
  },
  plugins: [],
}

