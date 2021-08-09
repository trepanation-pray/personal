const { watch, series } = require('gulp');

// Pull in each task
const sass = require('./src/assets/gulp-tasks/sass.js');
const scripts = require('./src/assets/gulp-tasks/scripts.js');
const images = require('./src/assets/gulp-tasks/images.js');
const fonts = require('./src/assets/gulp-tasks/fonts.js');
const clean = require('./src/assets/gulp-tasks/clean.js');

// Watch task
const listen = () => {
  watch('./src/assets/scss/**/*.scss', { ignoreInitial: true }, sass);
  watch('./src/assets/scripts/**/*', { ignoreInitial: true }, scripts);
  watch('./src/assets/images/**/*', { ignoreInitial: true }, images);
  watch('./src/assets/fonts/**/*', { ignoreInitial: true }, fonts);
};

// Define any complex build tasks
const build = series(clean, scripts, sass, fonts, images);
const start = series(build, listen);

// Export tasks

// Assets
exports.sass = sass;
exports.scripts = scripts;
exports.images = images;
exports.fonts = fonts;

// Process
exports.clean = clean;
exports.build = build;
exports.listen = listen;
exports.start = start;

// Default
exports.default = build;
