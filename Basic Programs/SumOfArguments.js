const userInput = process.argv;
const argv = userInput.slice(2);

var sum = 0;
var count = 0;

function add() {
  console.log(argv);
  argv.forEach((element) => {
    if (!isNaN(element)) {
      sum += parseInt(element);
    } else {
      count++;
    }
  });

  console.log("Sum of arguments : " + sum);
  console.log("Invalid argument counts are : " + count);
}

add();
