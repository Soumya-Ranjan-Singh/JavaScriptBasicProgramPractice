const strArr1: string[] = ["Hello", "World"];
const strArr2: Array<string> = ["Hello", "World"]; //literal declaration

let anyArr: any[] = ["Hello", 10, true]; //Using of any keyword

let myTuple: [string, number, number?] = ["Hi", 10]; //  tupple is a kind of array which consists some perticular data type elements
//i.e given during initialization. like string and number given here, so it accepts string and num.
//it should contain 3 values where 1 st is string, 2 nd is num and 3rd is num but optional.
console.log(myTuple[0]);
console.log(myTuple[1]);
myTuple[2] = 100;
console.log(myTuple[2]);

let values: Array<string | number> = ["Apple", 2, "Orange", 3, 4, "Banana"];
console.log(values);
