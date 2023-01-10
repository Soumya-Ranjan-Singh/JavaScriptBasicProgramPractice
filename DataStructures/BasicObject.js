const obj = {
  name: "soumya",
  age: 25,
  "key-three": true,
  sayMyname: function () {
    console.log(this.name);
  },
};
obj.hobby = "football";
delete obj.hobby;

console.log(obj.name);
console.log(obj["age"]);
console.log(obj);
console.log(obj["key-three"]);
obj.sayMyname();

//Object.keys(), .values(), .entries(_)  --> basically working as map but unordered where map is ordered
//keys in object can be string or symbol whereas in map it may be any type.
