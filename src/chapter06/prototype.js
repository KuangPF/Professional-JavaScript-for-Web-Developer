/* 原型模式 */

function Ferrar() {}
Ferrar.prototype = {
	color: 'red',
	speed: 350,
	msg: '自动驾驶',
	price: ['3,500,000$', '3,600,000$', '3,700,000$'],
	autoDrive: function () {
		console.log('额外的功能：' + this.msg);
	}
}

let ferrar01 = new Ferrar();
let ferrar02 = new Ferrar();
console.log(ferrar02.price); //  ["3,500,000$", "3,600,000$", "3,700,000$"]
ferrar01.price.push('3,800,000$');
console.log(ferrar02.price); // ["3,500,000$", "3,600,000$", "3,700,000$", "3,800,000$"]