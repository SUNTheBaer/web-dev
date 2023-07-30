const yourFirstVariable = 'lol';
const yourSecondVariable = 10;
const yourThirdVariable = { firstProp: 'hello World' };

console.log(yourThirdVariable.firstProp);

// Declaration then assignment
let anotherVariable;
anotherVariable = 20;

console.log(anotherVariable);

// Const doesn't allow any new assignment
const variable1 = 10;
// Let allows new assignments
let variable2 = 10;
// Var allows new declarations (Legacy keyword, not needed in 99% of cases)
var variable3 = 10;

// Single quotes and double quotes are identical, but standard practice is single quote
const stringValue = 'hello'
const anotherStringValue = "goodbye"

// JS is dynamically typed, no variable type declaration
const number1 = 10;
const number2 = '20';

console.log(number1 + number2);

const firstArray = [10, 20, 30, 40]
const secondArray = [10, 'string', [1, 2], { prop: 'lmao' }]

console.log(secondArray[2]);

const objectVariable = { prop1: 20, prop2: 50 };

console.log(objectVariable.prop2);
console.log(objectVariable['prop1']);

const nestedObject = {
    layer1: {
        layer2: {
            layer3: {
                targetValue: 15
            }
        }
    }
}

console.log(nestedObject.layer1.layer2.layer3.targetValue);

const functionContainerVariable = function() {
    return 20
}

console.log(functionContainerVariable());

// Challenges
const myBoolean = true;
const myString = 'hello world';
const firstNumber = 20;
let secondNumber = 40;
secondNumber = 80;
const myArray = [myBoolean, myString];
const myObject = {
    firstProperty: myArray,
    sumProperty: firstNumber + secondNumber
}
console.log(myObject);
console.log(myObject.sumProperty);
console.log(myObject.firstProperty[1]);