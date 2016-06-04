var timer = setInterval(function() {
    console.info(new Date().getTime());
}, 1000);

console.info(timer);
/*
	{
	    _called: false,
	    _idleTimeout: 1000,
	    _idlePrev: Timer {
	        '0': [Function: listOnTimeout],
	        _idleNext: [Circular],
	        _idlePrev: [Circular],
	        msecs: 1000
	    },
	    _idleNext: Timer {
	        '0': [Function: listOnTimeout],
	        _idleNext: [Circular],
	        _idlePrev: [Circular],
	        msecs: 1000
	    },
	    _idleStart: 83,
	    _onTimeout: [Function: wrapper],
	    _repeat: [Function]
	}
*/
clearInterval(timer);

console.info(timer);
/*
	{
	    '0': null,
	    _called: false,
	    _idleTimeout: -1,
	    _idlePrev: null,
	    _idleNext: null,
	    _idleStart: 78,
	    _onTimeout: null,
	    _repeat: null
	}
*/