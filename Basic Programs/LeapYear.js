const userInput = process.argv;
const argv = userInput.slice(2);

var year = argv[0];

if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)) {
  console.log("It is leap year");
} else {
  console.log("It is not leap year");
}
