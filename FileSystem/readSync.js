var fs = require('fs');

var bf = new Buffer(10);
var fd =fs.openSync('test.txt', 'r');
var len = fs.readSync(fd,bf,0,4,null);
console.info(len);
console.info(bf);