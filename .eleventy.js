// Import data files
const site = require('./src/_data/site.json');
const navigation = require('./src/_data/navigation.json');
const sass = require('./src/_config/sass-process.js');

module.exports = config => {
  //Watching for modificaions in style directory
  sass('./src/assets/scss/main.scss', './dist/assets/css/main.css');
  return {
    dir: {
      input: 'src',
      output: 'dist',
      layouts: '_includes/layouts'
    },
    passthroughFileCopy: true
  };
};