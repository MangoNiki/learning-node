var querystring = require('querystring');

var str = "name%3D%E5%90%8D%E5%AD%97";
var queryObj = querystring.unescape(str);

console.info(queryObj);//name=名字