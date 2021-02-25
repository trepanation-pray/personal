// Import data files
const site = require('./src/_data/site.json');
const navigation = require('./src/_data/navigation.json');

module.exports = config => {

  // Watching for modificaions in style directory
  config.addWatchTarget('./src/assets/scss/');
  config.addPassthroughCopy('./src/assets/scripts/');
  config.addPassthroughCopy('./src/assets/fonts/');
  config.addPassthroughCopy('./src/assets/images/');
  config.addPassthroughCopy('./src/projects/images/*');
  config.addPassthroughCopy('./src/writing/images/*');

  // Collections

  // Projects
  config.addCollection('projects', collection => {

    var projects = collection.getFilteredByGlob('./src/projects/*/*.md');

    projects.sort(function (a, b) {
      return a.data.order - b.data.order;
    });

    return projects;
  });

  // Posts
  config.addCollection('writings', collection => {
    return [
      ...collection.getFilteredByGlob('./src/writing/*/*.md')
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