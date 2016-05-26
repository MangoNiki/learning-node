var url = require('url');

var str1 = url.resolve('/one/two/three', 'four'),
str2 = url.resolve('http://example.com/', '/one'),
str3 = url.resolve('http://example.com/one', '/two');

console.info(str1);///one/two/four
console.info(str2);//http://example.com/one
console.info(str3);//http://example.com/two