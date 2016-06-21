const http = require('http');
const cheerio = require('cheerio');



var options = {
    hostname: '127.0.0.1',
    path: '/api/signin',
    port: 3000,
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
};
var postReq = http.request(options, function(res) {
    var html = '';

    res.on('data', function(chunk) {
        html += chunk;
    });

    res.on('end', function() {
        var $ = cheerio.load(html);
        console.info(html);
    })
}).on('error', function(e) {
    console.info(e);
});


postReq.write('u=admin&p=12345678');
postReq.end();
