let myMap = new Map([
  ["fname", "Soumya"],
  ["lname", "Ranjan"],
]);

for (let entry of myMap.entries()) {
  console.log(`${entry[0]} --> ${entry[1]}`);
}

for (let value of myMap.values()) {
  console.log(value);
}

for (let key of myMap.keys()) {
  console.log(key);
}

let myMap1 = new Map();

myMap1.set("fname", "Soumya"); //Set method is to set key value pair
myMap1.set("age", 30);

console.log(myMap1.get("fname")); //Get method is to get perticular value of a key

let ob1 = {};
let ob2 = {};

myMap1.set(ob1, 10);
myMap1.set(ob2, 20);

console.log(myMap1.get(ob1));
myMap1.delete("fname"); // Delete method is to delete one perticular key value pair
myMap1.clear(); // Clear method is to completely clean one map. I.e- delete everything from the map.

console.log(myMap1.size);
console.log(myMap1.has("fname")); //has method is to check whether map contain that perticular key/property.
