var buf_01 = new Buffer(26);
var buf_02 = new Buffer(26);

buf_02.fill('!');

for (var i = 0; i < 26; i++) {
    buf_01[i] = i + 97;
}
console.info(buf_01.toString()); //abcdefghijklmnopqrstuvwxyz
console.info(buf_02.toString()); //!!!!!!!!!!!!!!!!!!!!!!!!!!

buf_01.copy(buf_02, 2, 14, 25);

console.info(buf_01.toString()); //abcdefghijklmnopqrstuvwxyz
console.info(buf_02.toString()); //!!opqrstuvwxy!!!!!!!!!!!!!