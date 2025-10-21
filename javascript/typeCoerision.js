console.log('=============Type Coercion=======================')

var a = 1;
var b = 1;
var c = a + b;
console.log('output (N,N)', c, typeof c)
b = '1';
c = a + b;
console.log('output (N,S)', c, typeof c)
c = a * b;
console.log('output (N,S)', c, typeof c)
a = 'suman';
c = a - b;
console.log('output (S,S)', c, typeof c, typeof NaN)

// logical operations
// Falsy values --> 0, false, undefined, null, '', NaN
if('sum' && 0) {
    console.log('true');
} else {
    console.log('false')
}

var input = prompt('What is Name?');
console.log('input',input + input);

