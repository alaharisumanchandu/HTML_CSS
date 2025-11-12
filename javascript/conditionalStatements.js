var isTure = 1 || 0;
// if else blocks
if (isTure == true) {
  console.log("true");
  console.log("conditional stattements");
} else {
  console.log("false");
}

// nested if - else blocks
var number = -2;

if (number > 0) {
  if (number % 2 === 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
} else {
  console.log("number is less than zero");
}

// else -if ladders

var a = 2;
var b = 3;
var operator = '-'; // '+', '-', '/', '*'

if (operator === '+') {
    console.log(a+b);
} else if(operator === '-') {
        console.log(a-b);
} else if(operator === '*') {
    console.log(a*b)
}  else if(operator === '/'){
    console.log(a/b);
} else {
  console.log('invalid operator');
}

// switch case 

switch (operator) {
  case '+': 
    console.log(a+b);
    break;
    case '-':
    console.log(a-b);
    break;
    case '*':
    console.log(a*b);
    break;
    case '/':
    console.log(a/b);
    break;
  default:
    console.log('invalid operator');
    break;
}