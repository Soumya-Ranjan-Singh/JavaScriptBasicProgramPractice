let displayColors = function (message, ...colors) {
  //Using rest operator
  console.log(message);

  for (let i in colors) {
    console.log(colors[i]);
  }
};

let message = "Hello";
let colorArray = ["orange", "yellow", "blue"];
displayColors(message, ...colorArray);
displayColors(message, "red");
displayColors(message, "red", "blue");

//rest is combining psarameters to a js array where spread expands iterables into individual element
//rest using function declaration where spread using function calling.
