function isPowerOfTwo(n) {
  if (n < 1) {
    return false;
  }
  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2; // n reduced
  }
  return true;
}
console.log(isPowerOfTwo(8));

//Above Big(O) ---> O(log n)  --> Logarithmic

//Another Way
function isPowerOfTwoBitWise(n) {
  if (n < 1) {
    return false;
  }
  return (n & (n - 1)) === 0;
}
console.log(isPowerOfTwoBitWise(8));

//Above Big(O) ---> O(1)  --> Constant
