//Enum is used to provide perticular numeric constasnts through out the program/project.

enum EyeColor {
  Brown = 1,
  Black = 5,
  Blue = 10,
}

var myEyeColor = EyeColor.Brown;

console.log(myEyeColor); // O/P --> 1
console.log(EyeColor[myEyeColor]); // O/P --> Brown
