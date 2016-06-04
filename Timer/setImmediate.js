//调度在所有 I/O 事件回调之后、setTimeout 和 setInterval 之前“立即”执行 callback。返回一个可能被 clearImmediate() 用到的 immediateId。可选地，您还能给回调传入参数。
//immediate 的回调以它们创建的顺序被加入队列。整个回调队列会在每个事件循环迭代中被处理。如果您在一个正被执行的回调中添加 immediate，那么这个 immediate 在下一个事件循环迭代之前都不会被触发。
var timer = setImmediate(function(name, age) {
    console.info(name + ' - ' + age); // 输出“niki - 23”
}, 'niki', 23);

console.info(timer);
/*
	Immediate {
	    _idleNext: { _idleNext: [Circular], _idlePrev: [Circular] },
	    _idlePrev: { _idleNext: [Circular], _idlePrev: [Circular] },
	    _onImmediate: [Function]
	}
*/
