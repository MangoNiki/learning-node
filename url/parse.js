var url = require('url');

//url.parse(urlStr[, parseQueryString][, slashesDenoteHost])
//urlStr:类型为string，需要被解析的URL字符串
//parseQueryString:类型为boolean，如果为true,则最终query为对象，false则为url格式字符串返回
//slashesDenoteHost:斜线前面是否可以表现域名，当值为false时,解析已“//”开头的URL会出错。否则可以正常解析


var str = "http://html-css.90zl.com/getinfo?name=niki#basicinfo";
// var urlObj = url.parse(str);
// var urlObj = url.parse(str,false);
// var urlObj = url.parse(str,true);

str = "//html-css.90zl.com/getinfo?name=niki#basicinfo";
// var urlObj = url.parse(str,true,false);
var urlObj = url.parse(str,true,true);
console.info(urlObj);