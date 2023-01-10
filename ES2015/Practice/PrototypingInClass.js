class Person {
  greet() {}
}

let p = new Person();
console.log(p.greet === Person.prototype.greet); //Both are same
console.log(typeof Person); // considered as function. Dont know why...
