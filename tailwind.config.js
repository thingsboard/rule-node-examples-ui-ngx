const fs = require('fs');
const path = require("path");

const loadTbClasses = () => {
  const tbClassesJson = path.resolve(path.join('.', 'dist', 'tbClasses.json'));
  const data = fs.readFileSync(tbClassesJson, 'utf8');
  return JSON.parse(data);
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  important: ".tb-default",
  content: [
    "./src/**/*.{html,ts}",
    "./projects/rulenode-core-config/src/**/*.{html,ts}",
  ],
  theme: {
    screens: {
      'xs': {
        max: '599px'
      },
      'sm': {
        min: '600px',
        max: '959px'
      },
      'md': {
        min: '960px',
        max: '1279px'
      },
      'md-lg': {
        min: '960px',
        max: '1819px'
      },
      'lg': {
        min: '1280px',
        max: '1919px'
      },
      'xl': {
        min: '1920px',
        max: '5000px'
      },
      'lt-sm': {
        max: '599px'
      },
      'lt-md': {
        max: '959px'
      },
      'lt-lg': {
        max: '1279px'
      },
      'lt-xl': {
        max: '1919px'
      },
      'gt-xs': {
        min: '600px'
      },
      'gt-sm': {
        min: '960px'
      },
      'gt-md': {
        min: '1280px'
      },
      'gt-xmd': {
        min: '1600px'
      },
      'gt-md-lg': {
        min: '1820px'
      },
      'gt-lg': {
        min: '1920px'
      },
      'gt-xl': {
        min: '1920px'
      }
    },
    extend: {
      flexBasis: {
        '7.5': '1.875rem',
        '25': '6.25rem',
        '37.5': '9.375rem',
        '62.5': '15.625rem',
        '72.5': '18.125rem'
      },
      flex: {
        full: '1 1 100%'
      },
      gap: {
        '0.75': '0.1875rem',
        '1.25': '0.3125rem',
        '3.75': '0.9375rem',
        '5.5': '1.375rem',
        '6.25': '1.5625rem',
      },
      minHeight: {
        '19': '4.75rem'
      },
      minWidth: {
        '7.5': '1.875rem',
        '25': '6.25rem',
        '37.5': '9.375rem',
        '62.5': '15.625rem',
        '72.5': '18.125rem'
      },
      maxWidth: {
        '5%': '5%',
        '8%': '8%',
        '10%': '10%',
        '15%': '15%',
        '17%': '17%',
        '20%': '20%',
        '23%': '23%',
        '25%': '25%',
        '26%': '26%',
        '30%': '30%',
        '33%': '33%',
        '35%': '35%',
        '37%': '37%',
        '40%': '40%',
        '45%': '45%',
        '50%': '50%',
        '55%': '55%',
        '60%': '60%',
        '65%': '65%',
        '70%': '70%',
        '75%': '75%',
        '80%': '80%',
        '85%': '85%',
        '90%': '90%',
        '92%': '92%',
        '95%': '95%',
        '100%': '100%',
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/6': '16.666667%',
        '2/6': '33.333333%',
        '4/6': '66.666667%',
        '5/6': '83.333333%',
        '1/12': '8.333333%',
        '2/12': '16.666667%',
        '4/12': '33.333333%',
        '5/12': '41.666667%',
        '7/12': '58.333333%',
        '8/12': '66.666667%',
        '10/12': '83.333333%',
        '11/12': '91.666667%',
        '7.5': '1.875rem',
        '25': '6.25rem',
        '37.5': '9.375rem',
        '50': '12.5rem',
        '62.5': '15.625rem',
        '72.5': '18.125rem'
      },
      maxHeight: {
        '20%': '20%',
        '30%': '30%',
        '50%': '50%',
        '60%': '60%',
        '70%': '70%',
        '80%': '80%',
        '100%': '100%'
      }
    },
  },
  safelist: [],
  blocklist: loadTbClasses(),
  corePlugins: {
    preflight: false,
    filter: false,
    transform: false,
    blur: false,
    borderRadius: false
  },
  experimental: {
    optimizeUniversalDefaults: true,
  },
  plugins: [],
}
