// Import data files
const site = require('./src/_data/site.json');
const navigation = require('./src/_data/navigation.json');

module.exports = function(config) {
  return {
    dir: {
      input: 'src',
      output: 'dist',
      layouts: '_includes/layouts'
    },
    passthroughFileCopy: true
  };
};