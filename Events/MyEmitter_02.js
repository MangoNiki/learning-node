"use strict"
var EventEmitter = require('events');


class MyEmitter extends EventEmitter {}

var myEmitter = new MyEmitter();

myEmitter.on('event',(name) => {
	console.info(name,this);
});

myEmitter.emit('event','niki');
myEmitter.emit('event','niki');
myEmitter.emit('event','niki');

