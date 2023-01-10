function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result = result * i;
  }
  return result;
}
console.log(factorial(5));

//Above Big(O) ---> O(n)  --> Linear

//Factorial by means of recurssion

//Factorial => n! = n * (n-1)!   -->  Base Case 0! = 1

function recursiveFactorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * recursiveFactorial(n - 1);
}
console.log(recursiveFactorial(5));

//Above Big(O) ---> O(n)  --> Linear cause recursively n is calling 5 times.
