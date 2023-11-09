// Create web server
// Run: node comments.js

// Load modules
var http = require('http');
var fs = require('fs');
var qs = require('querystring');
var path = require('path');

var comments = [
	{
		name: 'Morgan',
		comment: 'Hello World!'
	}
];

// Create server
http.createServer(function(request, response) {
	var url = request.url;
	if (url === '/') {
		// Set response header
		response.writeHead(200, {'Content-Type': 'text/html'});
		// Read file
		fs.readFile('./index.html', function(err, data) {
			if (err) throw err;
			// Send file data to response
			response.end(data);
		});
	} else if (url === '/comments') {
		if (request.method === 'GET') {
			// Set response header
			response.writeHead(200, {'Content-Type': 'application/json'});
			// Send comments data to response
			response.end(JSON.stringify(comments));
		} else if (request.method === 'POST') {
			var body = '';
			// Get data from request
			request.on('data', function(data) {
				body += data;
			});
			// When data is ready
			request.on('end', function() {
				// Parse data
				var comment = qs.parse(body);
				// Add comment
				comments.push(comment);
				// Set response header
				response.writeHead(200, {'Content-Type': 'application/json'});
				// Send comments data to response
				response.end(JSON.stringify(comments));
			});
		}
	} else {
		// Set response header
		response.writeHead(200, {'Content-Type': 'text/html'});
		// Read file
		fs.readFile('./' + url, function(err, data) {
			if (err) throw err;
			// Send file data to response
			response.end(data);
		});
	}
}).listen(3000);

console.log('Server running at http://localhost:3000/');