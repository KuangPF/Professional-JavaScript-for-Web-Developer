# 创建对象

这篇文章主要讲解如何创建一个对象，其中有以下几种方法

* 工厂模式
* 构造函数模式
* 原型模式
* 组合使用构造函数模式和原型模式
* 动态原型模式
* 寄生构造函数模式
* 稳妥构造函数模式

这几种方法中，主要说一下前面4中模式，后面两种模式可以自己去研究研究。

## 工厂模式
怎么理解工厂模式？就是比如你需要定制一辆法拉利跑车，你告诉法拉利跑车工厂你的一些要求：
 * 颜色：红色
 * 最高时速：350km/h
 * 可以自动驾驶
 * 可以定速巡航
 * ...
 然后过了一段时间，法拉利工厂就给你造出了这辆车，并交付给你。其实这就是工厂模式，你不需要知道中间的过程，你只需要告诉该工厂需要定制法拉利的一些性能参数和功能就可以了，抽象成代码如下：

``` javascript
 /* 工厂模式 */
function createFerrar(color, speed, msg) {
  let obj = new Object();
  obj.color = color;
  obj.speed = speed;
  obj.msg = msg;
  obj.autoDrive = function () {
    console.log('额外的功能：' + this.msg);
  }
  return obj;
}

let ferrar01 = createFerrar('red', 350, '自动驾驶');
let ferrar02 = createFerrar('red', 350, '定速巡航');

```

**工厂模式**有一个不好的地方就是：没有解决对象识别问题。怎么理解，或者可以这么描述，不知道这个对象是从哪里来的，如果还是不理解可以现在下构造函数模式。

## 构造函数模式

构造函数模式代码如下：

``` javascript
/* 构造函数模式 */

function Ferrar(color, speed, msg) {
	this.color = color;
	this.speed = speed;
	this.msg = msg;
	this.autoDrive = function () {
		console.log('额外的功能：' + this.msg);
	}
}

let ferrar01 = new Ferrar('red', 350, '自动驾驶');
let ferrar02 = new Ferrar('red', 350, '定速巡航');
```
对于构造函数创建对象的模式是通过操作符 `new` 来实现的，整个过程中大致可以分为4各部分：

* 创建了一个新的对象
* 将构造函数的作用域赋给新的对象（因此 `this` 指向了新的对象）
* 执行构造函数中的代码（为证函数添加新的属性和方法）
* 返回一个新的对象

##### 构造函数的问题
先看一段代码:

``` javascript
console.log(ferrar01.autoDrive === ferrar02.autoDrive); // false
```
这段代码表明，每个 `Ferrar` 实例都会重新创建一个 `Function` 实例，这没有必要。

## 原型模式

原型模式代码如下：

``` javascript
/* 原型模式 */

function Ferrar() {}
Ferrar.prototype = {
	color: 'red',
	speed: 350,
	msg: '自动驾驶',
	autoDrive: function () {
		console.log('额外的功能：' + this.msg);
	}
}

let ferrar01 = new Ferrar();
let ferrar02 = new Ferrar();
console.log(ferrar01.autoDrive === ferrar02.autoDrive) // true
```
从中可以看出，原型模式的确避免了构造函数模式中的问题，但原型模式也有自己的问题，那就是
* 所有实例在默认情况下会取到相同的属性值
* 原型中所有属性是被很多实例共享的

第一个问题比较容易理解，由于没有省略了为构造函数传递初始化参数这一环节，因此所有实例在默认情况下都将取得相同的属性值
对于第二个问题，可以先看下代码：

``` javascript
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
```
问题很明显了，当修改实例实例`ferrar01`的 `price` 属性的时候，实例`ferrar02`的 `price` 属性也改变了，这可以说明原型中所有属性是被很多实例共享的。
那么如何解决这个问题，很容易就可以想到使用构造函数和原型模式的组合。

## 组合使用构造函数模式和原型模式

