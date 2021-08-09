const { dest, src } = require('gulp');
const rename = require('gulp-rename')
const sourcemaps = require('gulp-sourcemaps')
const rollup = require('gulp-better-rollup')
const babel = require('rollup-plugin-babel')
const resolve = require("rollup-plugin-node-resolve");
const commonjs = require("rollup-plugin-commonjs");
const uglify = require("gulp-uglify-es").default

const scripts = () => {
	return src('./src/assets/scripts/*.js')
		.pipe(sourcemaps.init())
		.pipe(rollup(
			{
				plugins: [
					babel({
						targets: {
							browsers: "> 0.5%, ie >= 11"
						}
					}),
					resolve(),
					commonjs()
				]
			},
			"umd"
		))
		.pipe(sourcemaps.write())
		.pipe(uglify())
		.pipe(rename({ suffix: ".min" }))
		.pipe(dest('./dist/assets/scripts'))
}

module.exports = scripts;