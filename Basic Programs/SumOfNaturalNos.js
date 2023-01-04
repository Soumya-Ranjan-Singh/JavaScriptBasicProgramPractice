const userInput = process.argv;
const argv = userInput.slice(2);

var number = argv[0];
var i = 1;
var sum = 0;

while (i <= number) {
  sum += i;
  i++;
}

console.log("Sum : " + sum);
