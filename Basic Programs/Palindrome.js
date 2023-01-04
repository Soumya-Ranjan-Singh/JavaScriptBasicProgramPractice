const userInput = process.argv;
const argv = userInput.slice(2);

var number = argv[0];
var a = number;
var rev = 0;
var rem;

for (; number != 0; number = parseInt((number = number / 10))) {
  rem = parseInt(number % 10);
  rev = parseInt(rev * 10 + rem);
}

console.log("Reverse of the number " + a + " is : " + rev);

if (a == rev) {
  console.log("Entered no is palindrome");
} else {
  console.log("Entered no is not palindrome");
}
