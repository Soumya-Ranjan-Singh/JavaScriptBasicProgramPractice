//Modules are used make connection. Basically we get import export feature by means of modules.
//Importing function and class below from ModuleB.

import { greet, GreetMessage } from "./ModuleB.mjs";

greet("Hello World");

let gm = new GreetMessage();
gm.greet();

//import functions are going to execute first no matter how many lines down it is written below.
//For proof module b is executing first is the log statement present in module B.

import { fname as f, lname as l, obj } from "./ModuleB.mjs"; //(As is used to make alias of parameters when there is a big parameter name)

//you can change object property value here

obj.name = "Ross";
console.log(obj.name);
console.log(f); //When you are using alias dont use the main name. It throws error
console.log(l);
