var EventEmitter = require('events');
var util = require('util');

function MyEmitter() {
    EventEmitter.call(this);
}

util.inherits(MyEmitter, EventEmitter);


var myEmitter = new MyEmitter();

myEmitter.once('event', function(name) {
    console.info(name, this);//this指向了myEmitter对象，建议使用箭头函数
});

myEmitter.emit('event', 'niki');
myEmitter.emit('event', 'niki'); //此处被忽略不执行