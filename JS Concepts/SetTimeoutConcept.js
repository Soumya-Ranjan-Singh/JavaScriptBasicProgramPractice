function greet() {
  console.log("Hello");
}
setTimeout(greet, 2000);

//setTimeout code literal --> setTimeout(functionName, duration, param1, param2, ....)
//Above function Name consist the function name, duration is the number i.e milliseconds, rest are parameters

//To clear timeout clearTimeout method is used
function Greet(name) {
  console.log(`Hello ${name}`);
}
const timeoutId = setTimeout(Greet, 2000, "Soumya");
clearTimeout(timeoutId);
