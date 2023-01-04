var numArray = [70, 50, 10, 40, 90, 20, 30];
let max = numArray[0];
let min = numArray[0];

for (var i = 0; i < numArray.length; i++) {
  if (numArray[i] > max) max = numArray[i];
}
console.log("Largest element present in the given array is: " + max);

for (var i = 0; i < numArray.length; i++) {
  if (numArray[i] < min) min = numArray[i];
}
console.log("Smallest element present in the given array is: " + min);
