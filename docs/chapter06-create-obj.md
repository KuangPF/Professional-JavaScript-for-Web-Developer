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