var arr = [3, 60, 35, 2, 45, 320, 5];

console.log("Array Before Bubble Sort");
for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
console.log("\n");

bubbleSort(arr); //sorting array elements using bubble sort

console.log("Array After Bubble Sort");
for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

function bubbleSort(arr) {
  var n = arr.length;
  var temp = 0;
  for (var i = 0; i < n; i++) {
    for (var j = 1; j < n - i; j++) {
      if (arr[j - 1] > arr[j]) {
        //swap elements
        temp = arr[j - 1];
        arr[j - 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
}
