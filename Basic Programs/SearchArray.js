let nameArray = ["Soumya", "Sambit", "Nigam", "Rashmi", "Maggi"];
let tempArray = [];

const givenInput = process.argv;
const argv = givenInput.slice(2);
const userInput = argv[0];

function checkChar() {
  nameArray.forEach((element) => {
    if (element.includes(userInput.toUpperCase())) {
      tempArray.push(element);
    } else if (element.includes(userInput.toLowerCase())) {
      tempArray.push(element);
    }
  });
}

checkChar();
if (tempArray.length != 0) {
  tempArray.forEach((element) => {
    console.log(element);
  });
} else {
  console.log("No result found");
}
