var fs = require('fs');

/**
 * fs.writeFile(file, data[, options], callback)
 *
 * 	file <String> filename
 * 	
 * 	data <String> | <Buffer>
 * 	
 * 	options <Object> | <String>
 *  	encoding <String> | <Null> default = 'utf8'
 *   	mode <Number> default = 0o666
 *   	flag <String> default = 'w'
 *   	
 *  callback <Function>
 *
 */


fs.writeFile(
    './src/scripts/index.js',
    '(function($){}(jQuery));', {
        encoding: 'utf-8',
        flag: 'w+',
        mode: '777'
    },
    function(err) {
        if (err) {
            console.info('文件写出失败...');
        } else {
            console.info('文件写出成功...');
        }
    });
