console.time('for');

for(var i=0;i<1000000;i++){
	var str = '';
	for(var j=0;j<5;j++){
		str += (Math.random() + '').slice(2);
	}
	console.info(str);
}
console.timeEnd('for');