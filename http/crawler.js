var http = require('http');
var cheerio = require('cheerio');

var srcUrl = 'http://www.cnblogs.com/mangoniki/';
var linkData = [];

http.get(srcUrl, function(res) {

    var html = '';
    res.on('data', function(data) {
        html += data;
    });

    res.on('end', function() {
        getIndexLinks(html);
        console.info(linkData);
    });
}).on('error',function(err) {
	console.info('数据获取失败...');
});


function getIndexLinks(html) {
	var $ = cheerio.load(html);
	var $artBox = $('.postTitle a');

	$artBox.each(function(element, index) {
		var $link = $(this),
			href = $link.attr('href'),
			title = $link.text();
		linkData.push({
			title:title,
			href : href
		});
	});
}