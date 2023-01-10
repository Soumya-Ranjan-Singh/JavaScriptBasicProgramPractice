const arr = [1, 2, 3, "Soumya"];
arr.push(4);
arr.unshift(0);
arr.pop();
arr.shift();

for (const item of arr) {
  console.log(item);
}

//Big(O) for array -->
/**
 * Insert/remove from end (push/pop) --> O(1)
 * Insert/remove from begining (unshift/shift) --> O(n)
 * Access --> O(1)
 * Search --> O(n)
 * Concat/slice/splice --> O(n)
 * foreach/map/filter/reduce -->O(n)
 */
