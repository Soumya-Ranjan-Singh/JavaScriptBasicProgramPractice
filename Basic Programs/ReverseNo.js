const userInput = process.argv;
const argv = userInput.slice(2);

var number = argv[0];
var a = number;
var rev = 0;
var rem;

while (number != 0) {
  rem = parseInt(number % 10);
  rev = parseInt(rev * 10 + rem);
  number = parseInt(number / 10);
}

console.log("Reverse of the number " + a + " is : " + rev);
