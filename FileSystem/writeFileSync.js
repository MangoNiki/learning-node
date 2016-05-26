var fs = require('fs');

/**
 * fs.writeFileSync(file, data[, options])
 *
 * 
 */
var res = fs.writeFileSync('./src/scripts/main.js', 'alert("Hello world");', {
    encoding: 'utf-8',
    flag: 'w+',
    mode: '777'
});

console.info(res);//undefined
