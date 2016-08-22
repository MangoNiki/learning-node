console.info('创建一个指定长度的空buffer，内容随机');
var buf_01 = new Buffer(10);
console.info(buf_01); // <Buffer 00 00 00 48 8b 75 f8 48 83 c4>
buf_01.fill(0);
console.info(buf_01); // <Buffer 00 00 00 00 00 00 00 00 00 00>

console.info('构造函数创建buffer实例');
var buf_02 = new Buffer([1, 2, 3, 4, 5]);
console.info(buf_02); // <Buffer 01 02 03 04 05>

var buf_03 = new Buffer('niki');
console.info(buf_03); // <Buffer 6e 69 6b 69>

console.info('以特定的编码创建buffer实例');
var buf_04 = new Buffer('test', 'utf8');
console.info(buf_04); // <Buffer 74 65 73 74>

console.info('构造函数进行复制，但不共享内存');
var buf_05 = new Buffer('buffer');
var buf_06 = new Buffer(buf_05);
buf_05[0] = 0x61;
console.info(buf_06.toString()); //buffer
console.info(buf_05.toString()); //auffer

console.info('构造函数参数为TypedArray的时候，利用[.buffer]属性可以共享内存');
var arr = new Uint16Array(2);
arr[0] = 5000;
arr[1] = 6000;
var buf_07 = new Buffer(arr.buffer);
console.info(buf_07); // <Buffer 88 13 70 17>
arr[0] = 7000;
console.info(buf_07); // <Buffer 58 1b 70 17>
