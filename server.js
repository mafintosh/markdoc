var fs = require('fs');
var markdoc = require('./index');

require('http').createServer(function(request, response) {
	fs.readFile('.'+request.url, 'utf-8', function(err, file) {
		if (err) {
			response.writeHead(404);
			response.end();
			return;
		}
		response.writeHead(200, {'content-type':'text/html'});
		response.end((/\.md$/i.test(request.url) ? markdoc.parse : markdoc.parseCode)(file));
	});
}).listen(7000);