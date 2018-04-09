/* 原型链继承 */

function SuperType() {
	this.msg = '原型链继承'
}
SuperType.prototype = {
	getSuperMsg: function () {
		return this.msg;
	}
}

function SubType() {}
SubType.prototype = new SuperType();
SubType.prototype.getSubMsg = function() {
	return this.msg;
}
let subType01 = new SubType();
console.log(subType01.getSuperMsg()); // 原型链继承