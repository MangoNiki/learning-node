var fs = require('fs');

var fd =fs.openSync('test.txt', 'a+');
console.info(fd);