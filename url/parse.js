var url = require('url');

var str = "http://html-css.90zl.com/getinfo?name=niki#basicinfo";
// var urlObj = url.parse(str);
// var urlObj = url.parse(str,false);
// var urlObj = url.parse(str,true);

str = "//html-css.90zl.com/getinfo?name=niki#basicinfo";
// var urlObj = url.parse(str,true,false);
var urlObj = url.parse(str,true,true);
console.info(urlObj);