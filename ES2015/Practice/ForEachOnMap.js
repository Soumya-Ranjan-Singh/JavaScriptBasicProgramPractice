let myMap = new Map([
  ["fname", "Soumya"],
  ["lname", "Ranjan"],
]);
myMap.forEach(mapFunction);
function mapFunction(value, key, callingMap) {
  console.log(key + " " + value);
  console.log(myMap === callingMap);
}
