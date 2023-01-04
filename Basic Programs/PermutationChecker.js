var givenString = "abcd";
var checkingStr = "bcda";
var permutedArray = [];

/**
 * Function for generating different permutations of the string
 * Here if block is to print the permutations
 * For loop in the else block is to generate permutations
 * @param {*} givenString
 * @param {*} start
 * @param {*} end
 */
function permutedString(givenString, start, end) {
  if (start == end - 1) {
    console.log(givenString);
    permutedArray.push(givenString);
  } else {
    for (var i = start; i < end; i++) {
      givenString = swapString(givenString, start, i); //Swapping the string by fixing a character.
      permutedString(givenString, start + 1, end); //Recurisively calling function permutedString() for rest of the characters.
      givenString = swapString(givenString, start, i); //Backtracking and swapping the characters again.
    }
  }
}

/**
 * Function is for swapping the characters at position i with character at position j
 * @param {*} str
 * @param {*} i
 * @param {*} j
 * @returns
 */
function swapString(str, i, j) {
  b = Array.from(str);
  var ch;
  ch = b[i];
  b[i] = b[j];
  b[j] = ch;
  var returningString = "";
  for (k = 0; k < b.length; k++) {
    returningString = returningString + b[k];
  }
  return returningString;
}

permutedString(givenString, 0, givenString.length);

permutedArray.forEach((element) => {
  if (element == checkingStr) {
    console.log("The given permutation of string is present");
  }
});

//Simple logic
var flag;
for (i = 0; i < checkingStr.length; i++) {
  if (givenString.includes(checkingStr[i])) {
    flag = true;
  } else {
    flag = false;
    break;
  }
}

if (flag) {
  console.log("Pemuted String");
} else console.log("Not permuted");
