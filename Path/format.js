var path = require('path');

var path_1 = {
	dir:'/home/user/node',
	base:'index.html'
};
console.info(path.format(path_1));  // 输出 "/home/user/node/index.html"

var path_2 = {
	base : 'index.html'
};

console.info(path.format(path_2)); // 输出 "index.html"