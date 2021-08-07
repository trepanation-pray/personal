const del = require('del');

const clean = () => {
	return del('./dist/assets/**');
}

module.exports = clean;