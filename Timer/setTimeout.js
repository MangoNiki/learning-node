var timer_01 = setTimeout(function(name,age){
	console.info(name + " - " + age);// 输出“undefined - undefined”

},6000);

var timer_02 = setTimeout(function(name,age){
	console.info(name + " - " + age);// 输出“niki - 23”
},3000,'niki',23);