var arr1 = [9, 14, 3, 2, 43, 11, 58, 22];
console.log("Before Insertion Sort");
arr1.forEach((element) => {
  console.log(element);
});
console.log();

insertionSort(arr1); //sorting array using insertion sort

console.log("After Insertion Sort");
arr1.forEach((element) => {
  console.log(element);
});

function insertionSort(array) {
  var n = array.length;
  for (var j = 1; j < n; j++) {
    var key = array[j];
    var i = j - 1;
    while (i > -1 && array[i] > key) {
      array[i + 1] = array[i];
      i--;
    }
    array[i + 1] = key;
  }
}
