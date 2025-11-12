// variablename contains only letters, numbers, underscore(_), $. And don't not start with number.

// var i = 0; // bad practice
var isTrue = true;
var wasTure = true;
var isPopUpOpen;

// i = 'i';

isPopUpOpen = 12;

console.log(isPopUpOpen, typeof i);

var name = suman = 'suman';

var name = 'suman'
var suman = 'suman'

var covertStringIntoBoolean = () => {}

const PI = 3.14;
const PI_FULL_VALUE = 3.1415;

if (isPopUpOpen) {
    console.log('popup is opened');
}

var i
console.log(i)
i = 0;
// const i = 0;



// java variable declaration
// public name: string;
// name  = 'suman';



// kabab case --> is-pop-up-open (html)
// camel case --> isPopUpOpen 
// snake case --> is_pop_up_open 

// DataTypes: Number, boolean, string, undefined, null, Symbol(ES 2015), BigInt(ES 2020)


// Matematical Operators

var someValue = 130;
someValue = null;

console.log('output', 2 + 3, -Infinity, +Infinity, true, false, '', "", someValue); // add
console.log('output', 2 - 3); // subtraction
console.log('output', 2 * 3); // multiplication
console.log('output', 2 / 3); // divident
console.log('output', 2 % 3); // reminder

var a = 2;
var b = 3;
var c;

c= a + 2*b;

console.log(name = suman = 's');

console.log('c:', c)

console.log('var output', a + b);
console.log('var output', a - b);
console.log('var output', a / b);
console.log('var output', a % b);


// logical operators

console.log((1==1) && (1==2) && (1==3)) // logical AND (all values are true then output is true)
console.log((1==1) || (1==2)) // logical OR (any one value is ture then output is true)
console.log(!(1==1)) // logical Not

// comparision operators
console.log(1 == '1'); // equal to operator //true
console.log(1 === '1') // strict equal to operator // false
console.log(a <= 3); // less than or equal
console.log(a < 3); // less than
console.log(a > 3); // greater than
console.log(a >= 3); // greater than or equal to


// Binary Number system (& or | --> bitwise operators)
// 00 --> 0
// 01 --> 1
// 10 --> 2
// 11 --> 3
// 100 --> 4

// shorcuts (mathematical operators)
var a = a + b; 
var a =+ b;

// incremental operators

// pre operations
//  ++ (increment)
var i = 0;
console.log('before inc', i);


// i = i + 1; 

console.log('after inc', ++i);
// console.log(i)
// -- (decrement)
// i = i -1;
console.log('after decrement', --i)

// post operations
//  ++ (increment)
var i = 0;
console.log('before post inc', i);


// i = i + 1; 

console.log('after post inc', i++);
console.log(i)
// -- (decrement)
// i = i -1;
i = i--;
console.log('after post decrement', i--); console.log(i)
