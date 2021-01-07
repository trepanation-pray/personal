// Import data files
const site = require('./src/_data/site.json');
const navigation = require('./src/_data/navigation.json');

module.exports = config => {

  // Watching for modificaions in style directory
  config.addWatchTarget("./src/assets/scss/");
  config.addPassthroughCopy("./src/assets/scripts/");
  config.addPassthroughCopy("./src/assets/fonts/");
  config.addPassthroughCopy("./src/assets/images/");

  // Collections
  // Projects
  config.addCollection('projects', collection => {
    return [
      ...collection.getFilteredByGlob('./src/projects/*/*.md')
    ].reverse();
  });

  // Posts
  config.addCollection('writings', collection => {
    return [
      ...collection.getFilteredByGlob('./src/writing/*.md')
    ].reverse();
  });

  return {
    dir: {
      input: 'src',
      output: 'dist',
      layouts: '_includes/layouts'
    },
    passthroughFileCopy: true
  };
};