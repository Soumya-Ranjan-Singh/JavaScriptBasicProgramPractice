//Another Use of Prototype

function person(fName, lName) {
  this.firstName = fName;
  this.lastName = lName;
}
person.prototype.getFullName = function () {
  return this.firstName + " " + this.lastName;
};

function superHero(fName, lName) {
  person.call(this, fName, lName);
  this.isSuperHero = true;
}
superHero.prototype.fightCrime = function () {
  console.log("Fight Crime");
};
superHero.prototype = Object.create(person.prototype); // SuperHero inherited property from person

const batman = new superHero("Bruce", "Wayne");
superHero.prototype.constructor = superHero;
console.log(batman.getFullName());
