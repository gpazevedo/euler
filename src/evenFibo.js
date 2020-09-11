function fiboEvenSum(n) {
  if (n < 3) return 1;

  let fibo = 2;
  let fibo_1 = 1;
  let sum = 2;

  while (fibo <= n) {
    [fibo, fibo_1] = [fibo + fibo_1, fibo];
    sum += fibo % 2 === 0 ? fibo : 0;
  }
  return sum;
}
module.exports = { fiboEvenSum };

//fiboEvenSum(10);
