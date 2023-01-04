var numArray = [10, 20, 10, 80, 50, 20, 20, 30, 60];
var i, j;

console.log("Array elements are : ");
console.log("---------------------");
numArray.forEach((element) => {
  console.log(element);
});

console.log("Duplicate elements in the above array : ");
console.log("----------------------------------------");

for (i = 0; i < numArray.length; i++) {
  for (j = i + 1; j < numArray.length; j++) {
    if (numArray[i] == numArray[j]) {
      console.log(numArray[j]);
    }
  }
}
