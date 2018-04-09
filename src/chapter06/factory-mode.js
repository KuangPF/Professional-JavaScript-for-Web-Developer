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
console.log(ferrar01 instanceof createFerrar);
