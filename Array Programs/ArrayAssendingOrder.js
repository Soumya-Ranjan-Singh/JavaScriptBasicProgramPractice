var numArray = [70, 50, 10, 40, 90, 20, 30];
console.log("Elements as it is in array : ");
console.log("-----------------------------");

for (var i = 0; i < numArray.length; i++) {
  console.log(numArray[i]);
}

assendingOrderSorting();
function assendingOrderSorting() {
  for (var i = 0; i < numArray.length; i++) {
    for (var j = i + 1; j < numArray.length; j++) {
      var temp = 0;
      if (numArray[i] > numArray[j]) {
        temp = numArray[j];
        numArray[j] = numArray[i];
        numArray[i] = temp;
      }
    }
  }
}

console.log("Elements as per assending order : ");
console.log("----------------------------------");
numArray.forEach((element) => {
  console.log(element);
});
