var http = require('http');

http.createServer(function(req, res) {
	res.end('Hello World2!');
}).listen(3000);

console.log('Application started 3000 port!');