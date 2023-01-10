class Person {
  constructor(name) {
    console.log(name + " Person Constructor");
  }
  getId() {
    return 10;
  }
  getNum() {
    return 10;
  }
}

class Employee extends Person {
  constructor(name) {
    super(name);
    console.log(name + " Employee constructor");
  }
  getId() {
    return super.getId();
  }
  getNum() {
    return 20;
  }
}

let e = new Employee("Soumya"); // Soumya is parsaed as name parameter
console.log(e.getId()); //When we use super keyword then the parameter of parent class execute first. and child class method shows parent value.
console.log(e.getNum());

//above line consider as example that getnum method doesnt have super keyword so, it shows child class function value only
