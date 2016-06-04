var path = require('path');

console.info(__filename); //输出 /MyEnv/GitHub/learning-node/Path/parse.js


console.dir(path.parse(__filename));
//输出
/*
	{
	    root: '/',
	    dir: '/MyEnv/GitHub/learning-node/Path',
	    base: 'parse.js',
	    ext: '.js',
	    name: 'parse'
	}
*/
