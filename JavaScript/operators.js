// Arithmetic operators + - / * % ** ++ --
// Assignment operators = += -= /= *=
// Comparison operators == === != !== > < >= <=
// == does not look at type and will try to implicitly cast the data types, generally want to use === when comparing variables
const stringVariable = '20';
const numberVariable = 20;
console.log(stringVariable == numberVariable);
console.log(stringVariable === numberVariable);
// Comparison does not work with arrays and objects, need external library Lodash
const myArray1 = [1, 2, 3];
const myArray2 = [1, 2, 3];
console.log(myArray1 == myArray2);
// Ternary operator follows this format: expression ? execute if true : execute if false
const result = 20 === 20 ? 'values match' : 'values do not match';
console.log(result);
// Logical operators && || !