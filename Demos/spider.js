var express = require('express'),
    superagent = require('superagent'),
    cheerio = require('cheerio');

var app = new express();

app.get('/', function(req, resp, next) {

    superagent.get('https://cnodejs.org/')
        .end(function(err, respAgent) {
            if (err) {
                return next(err);
            }
            var $ = cheerio.load(respAgent.text);
            var items = [];

            $('#topic_list .topic_title').each(function(idx, element) {
                var $element = $(element);
                items.push({
                    title: $element.attr('title'),
                    href: $element.attr('href')
                });
            });
            resp.send(items);
        });

}).listen(3000, function() {
    console.info('app is listening at port 3000');
});
