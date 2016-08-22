const http = require('http');

http.createServer(function(req, resp) {

    resp.writeHeader(2, {
        'Content-Type': 'text/plain'
    });
    resp.write('Hello world');
    resp.end();
}).listen(3000);
