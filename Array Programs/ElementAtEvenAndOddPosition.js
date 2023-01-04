var numArray = [25, 11, 70, 22, 50, 12, 48, 57, 34, 89];
var i;

//For an array even position starts from index 1 because array starts from 0 index.
console.log("Elements of array at even position : ");
console.log("-------------------------------------");
for (i = 1; i < numArray.length; i += 2) {
  console.log(numArray[i]);
}

//For an array odd position starts from index 0 because array starts from 0 index.
console.log("Elements of array at odd position : ");
console.log("-------------------------------------");
for (i = 0; i < numArray.length; i += 2) {
  console.log(numArray[i]);
}