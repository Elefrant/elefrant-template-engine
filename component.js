'use strict';

var template = require('./lib/template');

module.exports = {
	enable: true,

	name: 'templateEngine',

	afterServer: function (elefrant, server) {
		return server.use(function(req, res, next) {
			res.render = function(path, data) {
				var html = template(path, data);

				res.writeHead(200, {
					'Content-Length': Buffer.byteLength(html),
					'Content-Type': 'text/html'
				});

				res.write(html);

				res.end();
			};

			res.redirect = function redirect(url) {
				var address = url;
				var body;
				var status = 302;

				// allow status / url
				if (arguments.length === 2) {
					if (typeof arguments[0] === 'number') {
						status = arguments[0];
						address = arguments[1];
					} else {
						deprecate('res.redirect(ur, status): Use res.redirect(status, url) instead');
						status = arguments[1];
					}
				}

				// Set location header
				if ('back' === address) address = res.get('Referrer') || '/';

				// Respond
				res.set('Location', address);

				// Support text/{plain,html} by default
				body = res.format(status + '. Redirecting to ' + encodeURI(url));

				// Respond
				res.status(status);
				res.set('Content-Length', Buffer.byteLength(body));

				res.send(body);
			};

			next();
		});
	}
};
