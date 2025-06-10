const { dest, src } = require('gulp');
const rename = require('gulp-rename')
const cleanCSS = require('gulp-clean-css');
const sassCompiler = require('sass');
const sassProcessor = require('gulp-sass')(sassCompiler);

// Flags whether we compress the output etc
const isProduction = process.env.NODE_ENV === 'production';

// The main Sass method grabs all root Sass files,
// processes them, then sends them to the output calculator
const sass = () => {
  return src('./src/assets/scss/*.scss')
    .pipe(sassProcessor().on('error', sassProcessor.logError))
    .pipe(
      cleanCSS(
        isProduction
          ? {
            level: 2
          }
          : {}
      )
    )
    .pipe(rename({ suffix: ".min" }))
    .pipe(dest('./dist/assets/css', { sourceMaps: !isProduction }));
};

module.exports = sass;
