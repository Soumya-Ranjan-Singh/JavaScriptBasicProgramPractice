const userInput = process.argv;
const argv = userInput.slice(2);

var month = parseInt(argv[0]);
var date = parseInt(argv[1]);

var a = false;

if (month == 3) {
  if (date >= 20 && date <= 31) {
    a = true;
  }
  console.log(a);
} else if (month == 4) {
  if (date >= 1 && date <= 30) {
    a = true;
  }
  console.log(a);
} else if (month == 5) {
  if (date >= 1 && date <= 31) {
    a = true;
  }
  console.log(a);
} else if (month == 6) {
  if (date >= 1 && date <= 20) {
    a = true;
  }
  console.log(a);
} else console.log(a);
