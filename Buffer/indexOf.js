var buf = new Buffer('I Love Gina');

console.info(buf.indexOf('s')); //-1:未找到
console.info(buf.indexOf('G')); //7
console.info(buf.indexOf('Love')); //2
console.info(buf.indexOf(new Buffer('Gina'))); //7



var utf16Buffer = new Buffer('\u039a\u0391\u03a3\u03a3\u0395', 'ucs2');

console.info(utf16Buffer.indexOf('\u03a3',  0, 'ucs2')); //4
console.info(utf16Buffer.indexOf('\u03a3', -4, 'ucs2')); //6
