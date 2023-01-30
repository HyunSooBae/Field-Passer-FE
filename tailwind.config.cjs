/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.jsx'],
  theme: {
    extend: {
      screens: {
        xxs: '320px',
        xs: '400px',
        sm: '540px',
        mm: '680px',
        md: '800px',
        lg: '1024px',
        xl: '1280px',
      },
      fontSize: {
        xxs: '0.6rem',
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        xl: '1.25rem',
      },
      colors: {
        transparent: 'transparent',
        field: '#21A04D',
        hoverField: '#666666',
        tableBg: '#E6FFE8'
      },
      gridTemplateColumns: {
        'admin': '400px 1520px'
      }
    },
  },
};
