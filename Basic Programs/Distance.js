const userInput = process.argv;
const argv = userInput.slice(2);

var x = parseInt(argv[0]);
var y = parseInt(argv[1]);

function euclideanDistance() {
  var distance = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
  console.log("Euclidean Distance is : " + distance);
}

euclideanDistance();
