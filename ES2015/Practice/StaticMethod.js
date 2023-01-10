class Person {
  constructor(name) {
    this.name = name;
    console.log(name + " Person Constructor");
  }
  greet() {
    console.log("Hello");
  }
  static staticMethod() {
    console.log("Static Method");
  }
}

let p = new Person("Soumya");
Person.staticMethod(); //No need to create objects for static methods. Directly call by class name....
p.greet();
