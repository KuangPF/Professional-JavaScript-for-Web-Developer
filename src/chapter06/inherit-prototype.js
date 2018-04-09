/* 原型链继承 */

function SuperType() {
	this.msg = '原型链继承'
}
SuperType.prototype = {
	getMsg: function () {
		return this.msg;
	}
}

function SubType() {}
SubType.prototype = new SuperType();
let subType01 = new SubType();
console.log(subType01.getMsg());