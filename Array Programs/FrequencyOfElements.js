var numArray = [10, 20, 10, 80, 50, 20, 20, 30, 60, 70];
var tempArray = [];
var i,
  j,
  visited = -1;

for (i = 0; i < numArray.length; i++) {
    var count = 1;
  for (j = i + 1; j < numArray.length; j++) {
    if (numArray[i] == numArray[j]) {
      count++;
      tempArray[j] = visited;
    }
  }
  if (tempArray[i] != visited) tempArray[i] = count;
}

console.log("---------------------");
console.log(" Element | Frequency ");
console.log("---------------------");

for (i = 0; i < tempArray.length; i++) {
  if (tempArray[i] != visited)
    console.log("     " + numArray[i] + "  |  " + tempArray[i]);
}
