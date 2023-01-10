/* function sayMyName(name) {
    console.log(`my name is ${name}`);
}

sayMyName("Soumya"); */

// Implicit Binding
const person = {
  name: "Soumya",
  sayMyName: function () {
    console.log(`My name is ${this.name}`);
  },
};
//Calling object property by . method.(you can use object["property"] also)
person.sayMyName();

//Explicit Binding
function sayMyName() {
  console.log(`My name is ${this.name}`);
}
sayMyName.call(person); //Calls a method of an object, substituting another object for the current object.

//New Binding
function personContact(name) {
  //this = {} --> new keyword create this constructer internally
  this.name = name;
}
const p1 = new personContact("Soumya");
const p2 = new personContact("Ranjan");
console.log(p1.name, p2.name); //Here comma works as a concatinator

//Default Binding
globalThis.personName = "Soumya";
function sayName() {
  console.log(`My name is ${this.personName}`); // Refering the global object/variable
}
sayName();

/**
 * Sequence / Priority
 * New Binding
 * Explicit Binding
 * Implicit Binding
 * Default Binding
 */
