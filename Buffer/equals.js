var buf_01 = new Buffer('ABC');
var buf_02 = new Buffer('414243', 'hex');
var buf_03 = new Buffer('ABCD');
console.info(buf_01.equals(buf_02)); // true
console.info(buf_01.equals(buf_03)); // false
