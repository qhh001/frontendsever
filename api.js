let url = require('url');
let fs = require('fs');
let path = require('path');

let Api = function() {};

Api.prototype.dispatch = function(request, response, root_dir) {
	console.log('[api] ' + request.method + ' ' + request.url);
	let pathname = url.parse(request.url).pathname;
	let realPath = path.join(root_dir, 'api', path.normalize(pathname.replace(/\.\./g, '')));

	if (!fs.existsSync(realPath)) {
		realPath += '.json';
	}

	fs.stat(realPath, function(err, stats) {
		if (!stats || (err && stats.isDirectory())) {
			response.writeHead(404, 'Not Found', {
				'Content-Type': 'text/plain'
			});
			response.write('404\n\nThis request URL ' + pathname + ' was not found on this server.');
			response.end();
			return;
		}

		response.setHeader('Content-Type', 'application/json;charset=utf-8');
		response.setHeader('Content-Length', stats.size);

		let lastModified = stats.mtime.toUTCString();
		let ifModifiedSince = 'If-Modified-Since'.toLowerCase();
		response.setHeader('Last-Modified', lastModified);

		if (request.headers[ifModifiedSince] && lastModified === request.headers[ifModifiedSince]) {
			response.writeHead(304, 'Not Modified');
			response.end();
		} else {
			let compressHandle = function(raw, statusCode, reasonPhrase) {
				let stream = raw;
				response.writeHead(statusCode, reasonPhrase);
				stream.pipe(response);
			};

			let raw = fs.createReadStream(realPath);
			compressHandle(raw, 200);
		}
	});
};

exports.Api = Api;
