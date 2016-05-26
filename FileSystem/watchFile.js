var fs = require('fs');

var options = {
    persistent: true,
    interval: 5007
};

fs.watchFile('watchFile.js', options, function(curr, prev) {
    console.info("上次修改时间：" + prev.mtime);
    console.info("本次修改时间：" + curr.mtime);
});
