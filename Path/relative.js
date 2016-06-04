var path = require('path');

var relativeStr = path.relative('/user/bin/custom/index.html','/user/bin/node/index.html');
console.info(relativeStr); // 输出 "../../node/index.html"