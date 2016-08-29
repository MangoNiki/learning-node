var net = require('net');

var server = net.createServer(function(socket) {

}).on('error', function(err) {
    throw err;
}).on('listen',function(){
	console.info('server is listening...');
});

server.listen(function(){
	address = server.address();
	console.info(address); //{ address: '::', family: 'IPv6', port: 49893 }
});
