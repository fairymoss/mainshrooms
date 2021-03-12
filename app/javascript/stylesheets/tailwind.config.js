module.exports = {
  purge: [
   './app/**/*.html.erb',
   './app/helpers/**/*.rb',
   './src/**/*.html',
   './src/**/*.js',
   './src/**/*.jsx',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
       backgroundImage: theme => ({
        'shroom': "url('/shrooms.jpg')",
        'volcano-shroom': "url('https://www.genengnews.com/wp-content/uploads/2018/08/Aug28_2017_Pixabay_MagicMushrooms_cropped2052222231.jpg')",
       }),
       transitionProperty: {
         'background': 'gradientColorStops, backgroundImage, backgroundColor',
       },
     },
  },
  variants: {
    extend: {
      gradientColorStops: ['hover'],
    },
  },
  plugins: [
   require('@tailwindcss/forms'),
 ],
}
