const {dest, src} = require('gulp');

const fonts = () => {
	return src('./src/assets/fonts/**.*')
		.pipe(dest('./dist/assets/fonts'))
}

module.exports = fonts;