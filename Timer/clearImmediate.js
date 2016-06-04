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
clearImmediate(timer);

console.info(timer);
/*
Immediate { _idleNext: null, _idlePrev: null, _onImmediate: undefined }
*/
