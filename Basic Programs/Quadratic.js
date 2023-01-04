const userInput = process.argv;
const argv = userInput.slice(2);

var a = parseInt(argv[0]);
var b = parseInt(argv[1]);
var c = parseInt(argv[2]);

var delta = b * b - 4 * a * c;

console.log("Equation is : a*x*x + b*x + c" + "\n");

var x1 = (-b + Math.sqrt(delta)) / (2 * a);
var x2 = (-b - Math.sqrt(delta)) / (2 * a);

console.log("Roots of x are : ");
console.log("x1 : " + x1);
console.log("x2 : " + x2);
