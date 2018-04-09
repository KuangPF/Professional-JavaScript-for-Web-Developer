/* 原型链继承 */

function SuperType() {
	this.msg = '原型链继承';
	this.color = ['green', 'blue', 'yellow'];
}
SuperType.prototype = {
	getSuperMsg: function () {
		return this.msg;
	}
}

function SubType() {}
SubType.prototype = new SuperType();
SubType.prototype.getSubMsg = function () {
	return this.msg;
}
let subType01 = new SubType();
let subType02 = new SubType();
subType01.color.push('black');
console.log(subType01.color); // ["green", "blue", "yellow", "black"]
console.log(subType02.color); // ["green", "blue", "yellow", "black"]