var fs = require('fs');

var path = './test.tpl',
	options = {
		encoding : 'utf-8'
	};

var content = fs.readFileSync(path, options);
console.info(content);