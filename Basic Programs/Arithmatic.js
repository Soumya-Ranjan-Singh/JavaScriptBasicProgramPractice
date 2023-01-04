const userInput = process.argv;
const argv = userInput.slice(2);

var a = parseInt(argv[0]);
var b = parseInt(argv[1]);
var c = parseInt(argv[2]);

var d = a + b * c;
var e = c + a / b;
var f = (a % b) + c;
var g = a * b + c;

console.log("First Operation: " + d);
console.log("Second Operation: " + e);
console.log("Third Operation: " + f);
console.log("Fourth Operation: " + g);

if (d > e && d > f && d > g) console.log("Max Number: " + d);
else if (e > f && e > g) console.log("Max Number: " + e);
else if (f > g) console.log("Max Number: " + f);
else console.log("Max Number: " + g);
if (d < e && d < f && d < g) console.log("Min Number: " + d);
else if (e < f && e < g) console.log("Min Number: " + e);
else if (f < g) console.log("Min Number: " + f);
else console.log("Min Number: " + g);
