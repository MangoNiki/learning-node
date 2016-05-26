var querystring = require('querystring');


var str = "name=名字";

var queryObj = querystring.escape(str);
console.info(queryObj); //name%3D%E5%90%8D%E5%AD%97

