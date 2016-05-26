var http = require('http');


http.createServer(function(req, resp) {

    resp.writeHeader(2, {
        'Content-Type': 'text/plan'
    });
    resp.write('Hello world');
    resp.end();
}).listen(3000);
