var buf = new Buffer(20);
console.info(buf); //<Buffer 01 00 00 00 02 00 00 00 03 00 00 00 03 00 00 00 03 00 00 00>

buf.fill('@');
console.info(buf.toString()); //@@@@@@@@@@@@@@@@@@@@

buf.fill('$', 3, 10);
console.info(buf.toString()); //@@@$$$$$$$@@@@@@@@@@