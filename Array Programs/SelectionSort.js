var arr1 = [9, 14, 3, 2, 43, 11, 58, 22];
console.log("Before Selection Sort");
arr1.forEach((element) => {
  console.log(element);
});

console.log("\n");

selectionSort(arr1); //sorting array using selection sort

console.log("After Selection Sort");
arr1.forEach((element) => {
  console.log(element);
});

function selectionSort(arr) {
  for (var i = 0; i < arr.length - 1; i++) {
    var index = i;
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[index]) {
        index = j; //searching for lowest index
      }
    }
    var smallerNumber = arr[index];
    arr[index] = arr[i];
    arr[i] = smallerNumber;
  }
}
