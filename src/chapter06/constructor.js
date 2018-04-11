/* 构造函数模式 */

function Ferrar(color, speed, msg) {
	this.color = color;
	this.speed = speed;
	this.msg = msg;
	this.autoDrive = function () {
		console.log('额外的功能：' + this.msg)
	}
}

let ferrar01 = new Ferrar('red', 350, '自动驾驶');
let ferrar02 = new Ferrar('red', 350, '定速巡航');
console.log(ferrar01.autoDrive === ferrar02.autoDrive);