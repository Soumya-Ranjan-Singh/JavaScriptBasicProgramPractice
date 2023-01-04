const userInput = process.argv;
const argv = userInput.slice(2);
/** in cmd "node DisplayUnit,js 5"
 * argv[0] = node which is node itself that is process
 * argv[1] = is the path containg the script i.e DisplayUnit.js
 * thats why slice 2 is written so we can skip those things from array.
 * and argv will start from 10
 */

var number = argv[0];

if (number == 1) console.log("Unit");
else if (number == 10) console.log("Ten");
else if (number == 100) console.log("Hundred");
else if (number == 1000) console.log("Thousand");
else if (number == 10000) console.log("Ten Thousand");
else if (number == 100000) console.log("Lakh");
else console.log("Invalid Number");
