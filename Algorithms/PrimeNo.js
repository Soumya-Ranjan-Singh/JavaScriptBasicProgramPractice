function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    // for optimality for loop can be changed by for (let i = 0; i < Math.sqrt(n); i++)
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(isPrime(5));

//Above Big(O) ---> O(n)  --> Linear & for optimality --> O(sqrt(n))
