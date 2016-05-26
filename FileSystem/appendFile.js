var fs = require('fs');

/**
 * fs.appendFile(file, data[, options], callback)
 * 
 * 
 */
fs.appendFile(
    './src/scripts/index.js',
    'alert("ok");', {
        encoding: 'utf-8',
        mode: '777',
        flag: 'a+'
    },
    function(err) {
        console.info(err);
    }
);
