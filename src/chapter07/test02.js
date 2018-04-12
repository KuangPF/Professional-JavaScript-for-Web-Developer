/* 
 *递归函数
 * Fibonacci
 */

function fibonacci(n) {
  if (n < 2) {
    return 1;
  } else {
    let n = 1;
    n++;
    console.log(n);
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

console.log(fibonacci(5))