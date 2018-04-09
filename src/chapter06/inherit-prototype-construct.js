/* 组合继承 */

function SuperType(msg) {
	this.color = ['green', 'blue', 'yellow'];
	this.msg = msg;
}

SuperType.prototype = {
	sayMsg: function () {
		console.log(this.msg);
	}
}

function SubType(msg) {
	SuperType.call(this, msg);
}
SubType.prototype = new SuperType();

let subType01 = new SubType('subType01');
let subType02 = new SubType('subType02');

subType01.color.push('black');
console.log(subType01.color); // ["green", "blue", "yellow", "black"]
console.log(subType02.color); // ["green", "blue", "yellow"]
subType01.sayMsg(); // subType01
subType02.sayMsg(); // subType02
console.log(subType01.sayMsg === subType02.sayMsg); // ture