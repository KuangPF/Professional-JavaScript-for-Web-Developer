/* 组合构造函数模式和原型模式 */

function Ferrar(color, speed, msg) {
	this.color = color;
	this.speed = speed;
	this.msg = msg;
	this.price = ['3,500,000$', '3,600,000$', '3,700,000$']
}

Ferrar.prototype = {
	constructor: Ferrar,
	autoDriver: function () {
		console.log('额外的功能：' + this.msg);
	}
}
let ferrar01 = new Ferrar('red', 350, '自动驾驶');
let ferrar02 = new Ferrar('red', 350, '定速循环');
console.log(ferrar01.autoDriver()); // 额外的功能：自动驾驶
console.log(ferrar02.price); //  ["3,500,000$", "3,600,000$", "3,700,000$"]
ferrar01.price.push('3,800,000$');
console.log(ferrar01.price); // ["3,500,000$", "3,600,000$", "3,700,000$", "3,800,000$"]
console.log(ferrar02.price); // ["3,500,000$", "3,600,000$", "3,700,000$"]