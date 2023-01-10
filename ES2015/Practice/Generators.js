let person = {
  fname: "Soumya",
  lname: "Singh",
};

//Generator --> Kind of function where we can pause and and play from where ever we pause. Kind of iterator as well
//By this we can iterate objects.

person[Symbol.iterator] = function* () {
  let properties = Object.keys(person);
  for (let t of properties) {
    yield this[t];
  }
};
for (let p of person) {
  console.log(p);
}

//Generator function
function* createGenerator() {
  yield 1;
  console.log("After 1st yield");
  yield 2;
}

let myGen = createGenerator();

console.log(myGen.next());
console.log(myGen.next());
console.log(myGen.next());
