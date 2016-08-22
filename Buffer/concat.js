var buf_01 = new Buffer(8);
var buf_02 = new Buffer(10);
var buf_03 = new Buffer(12);

var totalLength = buf_01.length + buf_02.length + buf_03.length;

buf_01.fill(0);
buf_02.fill(0);
buf_03.fill(0);

console.info(totalLength); // 30

var buf_04 = Buffer.concat([buf_01, buf_02, buf_03], totalLength);
console.info(buf_04);
// <Buffer 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00>

console.info(buf_04.length); // 30
