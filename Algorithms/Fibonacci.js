function fibonacci(n) {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}
console.log(fibonacci(5));

//Above Big(O) ---> O(n)  --> Linear

//Fibonacci by means of recurssion

//Fibonacci fun => Fn = F(n-1) + F(n-2)   -->  Base Case F0 = 0 & F1 = 1

function recursiveFibonacci(n) {
  if (n < 2) {
    return n;
  }
  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}
console.log(recursiveFibonacci(5));

//Above Big(O) ---> O(2^n)  --> Const
