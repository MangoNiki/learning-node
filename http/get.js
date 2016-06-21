var http = require('http');

http.get('http://www.baidu.com/', function(res) {
    console.info("Status:" + res.statusCode);
    var html = '';
    res.on('data', function(data) {
        html += data;
    });

    res.on('end', function() {
        console.info(html);
    });
}).on('error', function(e) {
    console.info(e);
});
