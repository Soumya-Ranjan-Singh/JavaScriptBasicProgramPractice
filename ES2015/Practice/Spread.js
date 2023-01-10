let employee = ["Soumya", "Ranjan", "Male"];

//Spread....
let [fname, ...elements] = employee;
console.log(fname);
console.log(elements);

//Spread expands iterables into individual element. and it is happenning during function call

let [, , gender] = employee;
console.log(gender);
