'use strict';

var swig  = require('swig');

module.exports = function (path, data) {
	return swig.renderFile(path, data);
};
