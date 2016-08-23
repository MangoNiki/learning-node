var buf = new Buffer('buffer');

for (var value of buf.values()) {
    console.info(value);
}
/*
98
117
102
102
101
114
 */


for (var value of buf) {
    console.info(value);
}
/*
98
117
102
102
101
114
 */