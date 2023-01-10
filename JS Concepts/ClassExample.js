class Person {
  constructor(fName, lName) {
    this.firstName = fName;
    this.lastName = lName;
  }
  sayMyName() {
    return this.firstName + " " + this.lastName;
  }
}

const classP1 = new Person("Bruce", "Wayne");
console.log(classP1.sayMyName()); // o/p -- Bruce Wayne

//Inheritence Concept
class SuperHero extends Person {
  constructor(fName, lName) {
    super(fName, lName);
    this.isSuperHero = true;
  }
  fightCrime() {
    console.log("Fighing Crime");
  }
}

const Batman = new SuperHero("Bruce", "Wayne");
console.log(Batman.sayMyName());
