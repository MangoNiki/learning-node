var timer = setTimeout(function() {
    console.info("ok");
}, 5000);
console.info("清除前....");
console.info(timer);
/*
	{
	    _called: false,
	    _idleTimeout: 5000,
	    _idlePrev: Timer {
	        '0': [Function: listOnTimeout],
	        _idleNext: [Circular],
	        _idlePrev: [Circular],
	        msecs: 5000
	    },
	    _idleNext: Timer {
	        '0': [Function: listOnTimeout],
	        _idleNext: [Circular],
	        _idlePrev: [Circular],
	        msecs: 5000
	    },
	    _idleStart: 81,
	    _onTimeout: [Function],
	    _repeat: null
	}
*/

clearTimeout(timer);

console.info("清除后....");
console.info(timer);

/*
	{
	    '0': null,
	    _called: false,
	    _idleTimeout: -1,
	    _idlePrev: null,
	    _idleNext: null,
	    _idleStart: 81,
	    _onTimeout: null,
	    _repeat: null
	}
*/
