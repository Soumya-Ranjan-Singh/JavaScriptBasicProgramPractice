let s = Symbol("First Symbol");
console.log(typeof s);
console.log(s.toString());

let s2 = Symbol();
let s3 = Symbol();

console.log(s2 === s3);

let s4 = Symbol("Test");
let s5 = Symbol("Test");

console.log(s4 === s5);

let s6 = Symbol.for("RegSymbol");
// Symbol.for is used to first check the perticular value in memory
//if it is there then it refers that memory otherwise it creates a new memory location
let s7 = Symbol.for("RegSymbol");

console.log(s6 === s7);
console.log(Symbol.keyFor(s4));

let fname = Symbol("FirstName");
let person = {
    [fname] : "Soumya"
};

console.log(Object.getOwnPropertyNames(person));
console.log(Object.getOwnPropertySymbols(person));
