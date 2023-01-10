let array = ["1111", "1110", "1100", "1000", "0000", "0001", "0011", "0111"];
let replacedArray = [];

function replaceString() {
  array.forEach((element) => {
    let stringFromArray = element;
    let newText = "";
    let tempCharacter;
    for (let i = 0; i < stringFromArray.length; i++) {
      if (stringFromArray.charAt(i).includes("1")) {
        tempCharacter = stringFromArray.charAt(i).replace("1", "0");
      } else {
        tempCharacter = stringFromArray.charAt(i).replace("0", "1");
      }
      newText = newText + tempCharacter;
    }
    replacedArray.push(newText);
  });
}

replaceString();
replacedArray.forEach((element) => {
  console.log(element);
});
