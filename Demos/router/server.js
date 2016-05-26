var http = require('http');
var url = require('url');

function start(route) {

    function serverListener(request, response) {

        var reqUrl = url.parse(request.url);
        console.info(reqUrl);

        var pathname = reqUrl.pathname;

       route(pathname);

        response.writeHead(200, { "Content-Type": "text/plain" });
        response.write("Hello World");
        response.end();
    }

    http.createServer(serverListener).listen(8888);
    console.info("服务器启动成功...");
}

exports.start = start;
