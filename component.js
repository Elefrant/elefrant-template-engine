'use strict';

var template = require('./lib/template');

module.exports = {
	enable: true,

	name: 'templateEngine',

	register: function (elefrant) {
		return function(res, path, data) {
			var html = template(path, data);

			res.writeHead(200, {
				'Content-Length': Buffer.byteLength(html),
				'Content-Type': 'text/html'
			});

			res.write(html);

			res.end();
		};
	}
};
