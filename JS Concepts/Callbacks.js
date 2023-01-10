function greet(name) {
  console.log(`Hello ${name}`);
}
function greetSoumya(greetFn) {
  const name = "Soumya";
  greetFn(name);
}
greetSoumya(greet); // Here in this line greet is a callback function and greetSoumya is a higher order function
