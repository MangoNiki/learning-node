var http = require('http');

var server = http.createServer(function(req, resp){
	resp.writeHead(200,{'Content-Type':'text/plan'});
	resp.end('hello wolrd');
});

server.listen(3000,function(err){
	console.info('server listening...');
});