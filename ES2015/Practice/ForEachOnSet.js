let mySet = new Set([1, 2, 3]);
mySet.forEach(setFunction);
function setFunction(value, key, callingSet) {
  console.log(key + " " + value);
  console.log(mySet === callingSet);
}
