const buf_01 = new Buffer(10);
console.info(buf_01); // <Buffer 00 00 00 00 00 00 00 00 00 00>

const buf_02 = new Buffer([1,2,3,4,5]);
console.info(buf_02); // <Buffer 01 02 03 04 05>

const buf_03 = new Buffer('niki');
console.info(buf_03); // <Buffer 6e 69 6b 69>

const buf_04 = new Buffer('test','utf8');
console.info(buf_04); // <Buffer 74 65 73 74>