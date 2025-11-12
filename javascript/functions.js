function addAllArrayElements(name) {
  var sum = 0;

  for (var i = 0; i <= name.length - 1; i++) {
    // i = 3, sum = 60
    sum += name[i];
  }
//   return sum;
  console.log(sum);
  return sum;
}


// var arr1 = [10,20,30];

// var sum1 = 0;

// for(var i = 0; i < arr1.length - 1; i++ ) {  // i = 3, sum = 60
//     sum1 += arr1[i];
// }

// console.log(sum1);

// var arr2 = [40, 50, 60];

// var sum2 = 0;

// for(var i = 0; i < arr2.length - 1; i++ ) {  // i = 3, sum = 60
//     sum2 += arr2[i];
// }

// console.log(sum2);
// addAllArrayElements([1, 2, 3]) / 3;
const result = addAllArrayElements([1, 2, 3]);
console.log('average',  result / 3);
console.log('sum value is even', result % 2 === 0)
addAllArrayElements([100, 200, 300, 400, 1, 325]);
