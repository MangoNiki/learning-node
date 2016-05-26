var fs = require('fs');


fs.open('./src/styles/index.css', 'a+', '777', function(err, fd) {
	
    fs.closeSync(fd);

    //以下内容没有被写入
    var bf = new Buffer('*{padding:0;margin:0;}');
    fs.write(fd, bf, 0, bf.length, null, function(err, len, buffer) {});
});
