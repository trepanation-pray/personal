const {dest, src} = require('gulp');

const scripts = () => {
	return src('./src/assets/scripts/**.*')
		.pipe(dest('./dist/assets/scripts'))
}

module.exports = scripts;