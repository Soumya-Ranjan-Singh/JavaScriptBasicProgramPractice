function person(fName, lName) {
  this.firstName = fName;
  this.lastName = lName;
}
const person1 = new person("Soumya", "Ranjan");
const person2 = new person("Sambit", "Behera");

/**
person1.getFullName = function () {
    return this.firstName + " " + this.lastName;
}
console.log(person1.getFullName());        // o/p -- soumya ranjan
*/
//console.log(person2.getFullName());   => Throws an error cause we are defining getFullName for person1 only

//Now comming to prototype --> Used to attach function or property to every instance

person.prototype.getFullName = function () {
  return this.firstName + " " + this.lastName;
};

console.log(person1.getFullName());
console.log(person2.getFullName());
