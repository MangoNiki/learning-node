var path = require('path');


//输出 “/MyEnv/GitHub/learning-node/Path/sep.js”
console.info(__filename);


//输出 "[ '', 'MyEnv', 'GitHub', 'learning-node', 'Path', 'sep.js' ]"
console.info(__filename.split(path.sep));
