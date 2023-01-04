var numArray = [20, 70, 50, 10, 40, 90, 20, 30];
var secondMax, secondMin;

sortArray();
function sortArray() {
  for (var i = 0; i < numArray.length; i++) {
    var temp = 0;
    for (var j = i + 1; j < numArray.length; j++) {
      if (numArray[i] > numArray[j]) {
        temp = numArray[i];
        numArray[i] = numArray[j];
        numArray[j] = temp;
      }
    }
  }
}

secondMax = numArray[1];
secondMin = numArray[numArray.length - 2];
console.log("Second largest element in array : " + secondMax);
console.log("Second smallest element in array : " + secondMin);
