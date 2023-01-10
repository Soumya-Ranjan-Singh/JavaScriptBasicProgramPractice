/* for ... of --> iterator method --> symbol.iterator */

let str = "Hello";
let arr = [1, 2, 3];
let num = 5;
let obj = { name: "Soumya" };

console.log("For string -" + typeof str[Symbol.iterator]);
console.log("For array -" + typeof arr[Symbol.iterator]);

//number and object are not iterable....

console.log("For number -" + typeof num[Symbol.iterator]);
console.log("For object -" + typeof obj[Symbol.iterator]);
