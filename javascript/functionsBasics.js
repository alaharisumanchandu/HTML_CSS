// 2,2 -- add --> 4
// 3,3 -- add --> 6
function add(a, b) {
  var total = a - b;
  return total;
}
var input1 = 10,
  input2 = 20;
var c = 100,
  d = 200;
// console.log(add(2, 2, 2));
// console.log(add(input1, input2));
var final = add(c, d);

// function --> function definition + function calling

// function calling---->| Black box |-->funcction calling, black box --> function definition
debugger
function getGenericMessage() {
    return "input is not an array";
}
function increaseEveryElementBy2(array) {
  if (Array.isArray(array)) {
    var output = [];
    for (let index in array) {
      output[index] = array[index] * 2;
    }
    return output;
  } else {
    var message = getGenericMessage();
    return message;
  }
}

console.log(increaseEveryElementBy2(1));

// function executions in call stack
// stack   // LastInFirstOut