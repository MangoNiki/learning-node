var util = require('util');


function Person() {
    this.name = 'niki';
    this.toString = function() {
        return this.name;
    };
}
var obj = new Person();

//util.inspect(object,[showHidden],[depth],[colors])
//	object:需要输出信息的对象
//	showHidden:输出更多隐藏信息
//	depth:表示最大递归的层数，如果对象很复杂，你可以指定层数以控制输出信息的多 少。如果不指定depth，默认会递归2层，指定为 null 表示将不限递归层数完整遍历对象
//	
//	colors:为 true，输出格式将会以ANSI 颜色编码，通常用于在终端显示更漂亮 的效果。
console.log(util.inspect(obj));
console.log(util.inspect(obj, true));
console.log(util.inspect(obj, true,null,true));
