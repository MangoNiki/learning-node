var EventEmitter = require('events');
var util = require('util');

function MyEmitter() {
    EventEmitter.call(this);
}

util.inherits(MyEmitter, EventEmitter);


var myEmitter = new MyEmitter();

myEmitter.on('event', function(name) {
    console.info(name, this);
});

myEmitter.emit('event', 'niki');
