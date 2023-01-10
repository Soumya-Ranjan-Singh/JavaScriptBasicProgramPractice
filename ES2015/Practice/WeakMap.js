let myMap = new WeakMap();
let ob1 = {};
myMap.set(ob1, "Hello World");
console.log(myMap.get(ob1));
ob1 = null;
console.log(myMap.get(ob1)); // in weakmap , we lost the reference as well if key having null value
