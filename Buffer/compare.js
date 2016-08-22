var arr = [Buffer('1234'), Buffer('0123')];

console.info(arr); // [ <Buffer 31 32 33 34>, <Buffer 30 31 32 33> ]

arr.sort(Buffer.compare);
console.info(arr); //[ <Buffer 30 31 32 33>, <Buffer 31 32 33 34> ]


var buf_01 = new Buffer('ABC');
var buf_02 = new Buffer('BCD');
var buf_03 = new Buffer('ABCD');

console.log(buf_01.compare(buf_01)); //0




console.log(buf_01.compare(buf_02)); //-1
console.log(buf_01.compare(buf_03)); //-1
console.log(buf_02.compare(buf_01)); //1
console.log(buf_02.compare(buf_03)); //1
console.info([buf_01, buf_02, buf_03].sort(Buffer.compare)); //[ <Buffer 41 42 43>, <Buffer 41 42 43 44>, <Buffer 42 43 44> ]
