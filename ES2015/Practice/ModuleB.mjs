//Modules are used make connection. Basically we get import export feature by means of modules.
//Save modules by .mjs extension
//exporting function and class below from ModuleB.

export function greet(messsage) {
  console.log(messsage);
}

export class GreetMessage {
  constructor() {
    console.log("Constructor");
  }

  greet() {
    console.log("Greet Function");
  }
}

//Default import export
let fname = "Soumya";
// export default fname; //When you use deafault it became a const for module.

let lname = "Ranjan";

let obj = {
  name: "Joey",
};

console.log("Module B loaded");

//Using of one line export of multiple parameters
export { fname, lname, obj };
