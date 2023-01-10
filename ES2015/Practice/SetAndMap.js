let mySet = Object.create(null);
mySet.id = 1;
if (mySet.id) {
  console.log("id exist"); //0 is sworking as false where as non 0 num work as true.
}

let myMap = Object.create(null);
myMap.name = "Soumya";
let val = myMap.name;
console.log(val);

myMap[100] = "Hello";
console.log(myMap["100"]); //By giving parameter in square bracket , give the key name as string to retrieve.

let ob1 = {};
let ob2 = {};

myMap[ob1] = "World";

console.log(myMap[ob2]); //Dont know why it is showing o/p --> as 1. may be bug or something...

console.log(ob1.toString());
console.log(ob2.toString());
