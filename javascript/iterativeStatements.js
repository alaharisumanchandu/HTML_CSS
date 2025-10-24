// for loop
for (var i = 0; i <= 5; i++) {
  console.log("number", i);
}

console.log("after", i);

// while loop
var j = 5;
while (j >= 0) {
  console.log("while", j);
  if (j % 2 === 0) {
    j--;
    j--;
  } else {
    j++;
  }
}

// do-while loop
var k = 0;
do {
  console.log("do-while", k);
  k++;
} while (k < 0);

// nested loops
var x, y;
var output = "";
for (x = 0; x < 3; x++) {
  for (y = 0; y < 3; y++) {
    output += "*"; // output = output + '*'
  }
  output += "\n"; // (\n)new line character \s (space) \t (tab)
}
console.log(output);


