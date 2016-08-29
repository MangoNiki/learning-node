var util = require('util');


function SuperClass() {
    this.name = 'niki';
    this.age = 23;
    this.speak = function() {
        console.info(this.name + ' - ' + this.age);
    }
}

SuperClass.prototype.group = 'one';
SuperClass.prototype.run = function() {
    console.info(this.group + ' is running...');
};

function SubClass() {
    this.sex = 1;
}


//只是实现了原型之间的继承关系
util.inherits(SubClass, SuperClass);


var sup = new SuperClass();
sup.speak();

sup.run();

var sub = new SubClass();
// sub.speak();
sub.run();
