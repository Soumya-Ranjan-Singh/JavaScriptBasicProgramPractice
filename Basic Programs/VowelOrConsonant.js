const userInput = process.argv;
const argv = userInput.slice(2);

var ch = argv[0];

switch (ch) {
  case "a":
  case "e":
  case "i":
  case "o":
  case "u":
  case "A":
  case "E":
  case "I":
  case "O":
  case "U":
    console.log(ch + " is a vowel");
    break;
  default:
    if ((ch >= "a" && ch <= "z") || (ch >= "A" && ch <= "Z")) {
      console.log(ch + " is a consonant");
    } else {
      console.log(ch + " is not a Alphabets");
    }
    break;
}
