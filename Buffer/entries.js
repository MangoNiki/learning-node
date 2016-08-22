var buf = new Buffer('buffer');

for(var item of buf.entries()){
	console.info(item);
}
/*
[ 0, 98 ]
[ 1, 117 ]
[ 2, 102 ]
[ 3, 102 ]
[ 4, 101 ]
[ 5, 114 ]
 */