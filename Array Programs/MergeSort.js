var a = [11, 30, 24, 7, 31, 16, 39, 41];
var n = a.length;
var m = n-1;
console.log("\nBefore sorting array elements are - ");
printArray(a, n);
mergeSort(a, 0, m);
console.log("\nAfter sorting array elements are - ");
printArray(a, n);

function mergeSort(a, beg, end) {
  if (beg < end) {
    var mid = parseInt((beg + end) / 2);
    mergeSort(a, beg, mid);
    mergeSort(a, mid + 1, end);
    merge(a, beg, mid, end);
  }
}

/* Function to merge the subarrays of a[] */
function merge(a, beg, mid, end) {
  var i, j, k;
  var n1 = mid - beg + 1;
  var n2 = end - mid;

  /* temporary Arrays */
  var LeftArray = [];
  var RightArray = [];

  /* copy data to temp arrays */
  for (i = 0; i < n1; i++) {
    LeftArray[i] = a[beg + i];
  }
  for (j = 0; j < n2; j++) {
    RightArray[j] = a[mid + 1 + j];
  }
  i = 0; /* initial index of first sub-array */
  j = 0; /* initial index of second sub-array */
  k = beg; /* initial index of merged sub-array */

  while (i < n1 && j < n2) {
    if (LeftArray[i] <= RightArray[j]) {
      a[k] = LeftArray[i];
      i++;
    } else {
      a[k] = RightArray[j];
      j++;
    }
    k++;
  }
  while (i < n1) {
    a[k] = LeftArray[i];
    i++;
    k++;
  }

  while (j < n2) {
    a[k] = RightArray[j];
    j++;
    k++;
  }
}

/* Function to print the array */
function printArray(a, n) {
  var i;
  for (i = 0; i < n; i++) {
    console.log(a[i]);
  }
}
