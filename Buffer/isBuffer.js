var buf_01 =  'I Love Gina';
console.info(Buffer.isBuffer(buf_01)); // false

var buf_02 = new Buffer('I Love Gina');
console.info(Buffer.isBuffer(buf_02)); // true