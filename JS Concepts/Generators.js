// function normalFunction() {
//   console.log("Hello");
//   console.log("World");
// }

// // normalFunction(); //The function wont stop unless it executes completely or having a return statement there

function* generatorFunction() {
  yield "Hello"; //The yield keyword is an operator by which the generator can pause itself.
  yield "World";
}
const generatorObject = generatorFunction();
// // for (const word of generatorObject) {
// //   console.log(word);
// // }
console.log(generatorObject.next().value);
console.log(generatorObject.next().value);
console.log(generatorObject.next().value);

// function* generator() {
//   yield "Hello"; //The yield keyword is an operator by which the generator can pause itself.
//   yield "World";
// }

// const gen = generator();

// console.log(gen.next().value);
// // expected output: 10

// console.log(gen.next().value);
// // expected output: 20
// console.log(gen.next().value);