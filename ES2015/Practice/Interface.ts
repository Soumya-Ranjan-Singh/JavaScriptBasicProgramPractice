interface Person {
  fname: string;
  lname: string;
  age?: number; //? is to whether to use age or not. Its works as an optional parameter
}

let employee1: Person = {
  fname: "Soumya",
  lname: "Ranjan",
  age: 30,
};

let employee2: Person = {
  fname: "Sambit",
  lname: "Behera", // If you are not giving ? mark at age then you are bound to impliment age here because you
  // are using interface otherwise it shows error but for ? mark its getting optional
};
