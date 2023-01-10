let mySet = new Set();
let key = {};
mySet.add(key);
console.log(mySet.size);
key = null;
console.log(mySet.size);
key = [...mySet][0];

let ob1 = {};
let ob2 = {};

let ob3 = { Test: "mock" };
let ob4 = { Test: "mock" };

mySet.add("Hello");
mySet.add(1);
mySet.add(ob1);
mySet.add(ob2);
mySet.add(ob3);
mySet.add(ob4);
console.log(mySet.size); // o/p --> 7

//No matter ob3 and ob4 is having same value or may be null like ob1 & ob2
//but they are initialised at different memory location.

let newSet = new Set([1, 2, 3, 4, 4, 4]); //it will consider 1 4 only rest duplicates are removed
console.log(newSet.size); // o/p --> 4

let chainSet = new Set().add("hello").add("world"); //chaining declaration
console.log(chainSet.size);

console.log(newSet.has(1)); // o/p --> true
console.log(newSet.delete(1)); // o/p --> true
console.log(newSet.delete(5)); // o/p --> false
console.log(newSet.size);
