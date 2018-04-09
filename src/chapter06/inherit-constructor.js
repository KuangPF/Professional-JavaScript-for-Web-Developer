/*  构造函数继承*/

function SuperType(msg) {
	this.color = ['green', 'blue', 'yellow'];
	this.msg = msg;
}

function SubType(msg) {
	SuperType.call(this, msg)
}

let subType01 = new SubType('subType01');
let subType02 = new SubType();
subType01.color.push('black');
console.log(subType01.color); // ["green", "blue", "yellow", "black"]
console.log(subType02.color); // ["green", "blue", "yellow"]
console.log(subType01.msg); // subType01