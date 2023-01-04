const userInput = process.argv;
const argv = userInput.slice(2);

var number = argv[0];
var sum = 0;

for (i = 1; i <= number; i++) {
  sum += i;
}

console.log("Sum of natural nos : " + sum);
