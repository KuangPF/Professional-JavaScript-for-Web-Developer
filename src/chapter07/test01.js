// 函数声明
// 函数声明的方式，调用函数可以在声明函数的前面，因为在执行代码之前会先读取函数声明，这就是函数声明提升
console.log(fun1(1, 2));

function fun1(x, y) {
  return x + y;
}

// 函数表达式
// 这种函数也较早匿名函数，因为在 function 后面没有函数名称，函数表达式与其他表达式一样，在使用前必须先要复制，否则会报错。
var add = function (x, y) {
  return x + y;
}
console.log(add(3, 4));
