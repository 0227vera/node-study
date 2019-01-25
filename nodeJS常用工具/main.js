const util = require('util');

function Base() {
    this.name = 'salvatore';
    this.age = 25;
    this.sayHello = function () {
        console.log('Hello   ' + this.name)
    }
}

Base.prototype.showName = function () {
    console.log('当前的名字是：————————>', this.name);
}

function Sub() {
    this.name = 'liaoxuan ';
}
util.inherits(Sub, Base);

let base = new Base();
base.sayHello();
base.showName();
console.log(base);
console.log('****************');
let sub = new Sub();
// sub.sayHello(); 报错 说明util.interits无法继承原型链上的方法
sub.showName();
console.log(sub)


console.log('******************************************');




function Person() {
    this.name = 'xxsalvatore';
    this.toString = function () {
        return this.name
    }
}
var obj = new Person();
console.log('---------->', util.inspect(obj))
console.log('---------->', util.inspect(obj, true, null, true))