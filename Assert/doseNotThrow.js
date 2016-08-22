const assert = require('assert');

assert.doesNotThrow(function(){
	throw new TypeError('type error');
},TypeError);
// AssertionError: Got unwanted exception (TypeError)..

assert.doesNotThrow(function(){
	throw new TypeError('type error');
},SyntaxError); 
//TypeError: type error

assert.doesNotThrow(function(){
	throw new TypeError('type error');
},TypeError,'Niki'); 
//AssertionError: Got unwanted exception (TypeError). Niki