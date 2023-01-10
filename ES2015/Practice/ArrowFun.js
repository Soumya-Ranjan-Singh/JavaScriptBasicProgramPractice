var getRegvalue = function () {
  return 10;
};
console.log(getRegvalue());

const getArrowValue = () => 10; // {
//return 10;
//};

//Above will give the same result
console.log(getArrowValue());

//Single parameterised arrow function
const arrowFun = (m) => 10 * m;

console.log(arrowFun(5));

//Double or multi parameterized arrow function
const multiArrowFun = (m, bonus) => 10 * m + bonus;

console.log(multiArrowFun(5, 50));
