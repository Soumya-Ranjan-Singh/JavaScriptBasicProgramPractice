const userInput = process.argv;
const argv = userInput.slice(2);

var a = argv[0];
var reverseString = "";

for (var i = a.length - 1; i >= 0; i--) {
  reverseString = reverseString + a[i];
}

console.log("Reverse of the string is : " + reverseString);

if (reverseString === a) {
  console.log("The given string is palindrome");
} else {
  console.log("The given string is not palindrome");
}
