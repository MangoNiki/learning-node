var timer_01 = setInterval(function(name, age) {
    console.info(name + '-' + age); // 输出“undefined-undefined”

}, 200);

var timer_02 = setInterval(function(name, age) {
    console.info(name + '-' + age); // 输出“niki-23”
    
}, 300, 'niki', 23);
