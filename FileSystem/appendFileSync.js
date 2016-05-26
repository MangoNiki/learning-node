var fs = require('fs');

/**
 * fs.appendFile(file, data[, options], callback)
 * 
 * 
 */
var res = fs.appendFileSync(
    './src/scripts/main.js',
    'alert("ok");', {
        encoding: 'utf-8',
        mode: '777',
        flag: 'a+'
    });
console.info(res);
