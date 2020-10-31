// #### 1. Print Exponential Values
// * Write a function that accepts two numbers and validate that they are numbers.

function numExp(num1, num2) {
  let num3 = "";
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    console.log("We need 2 numbers");
    return;
  }
  for (let i = 1; i <= num2; i++) {
    let numStr = num1 ** i;

    num3 = num3 + " " + numStr;
  }
  return num3;
}
console.log(numExp(3, 8));

// After that, the function should print _y_ exponential values starting from _x_.

// * For example if we have function(3, 5) The function should print `3 9 27 81 243`. Prints 5 exponential values of 3.
// * function(2, 8) The function prints `2 4 8 16 32 64 128 256`. Prints 8 exponential values of 2.

// #### 2. Fruits
// * Create a function named `printFavoriteFruit`. Declare a variable outside of the function and store your favorite fruit as a value. Reassign the variable within the function and print "My favorite fruit is: _x_".

let myFruit = "maracuja";
function printFavoriteFruit() {
  myFruit = "papaya";
  return "My favourite fruit is " + myFruit;
}

console.log(printFavoriteFruit());

// #### 3. Multiply a Number by Itself
// * Create a function named `exponent` that takes two numbers as parameters. The second parameter defines how many times the first number should be multiplied by itself. Save the output in a variable named `result`.
// * Then, try to access the variable `result` outside of the `exponent` function. Is this possible? Why/Why not? Comment your answer in the `index.js` file.

// We obtain ReferenceError: result is not defined because the variable is inside the scope function and out of the scope is not defined.

function exponent(num1, num2) {
  let result = "";
  for (let i = 1; i <= num2; i++) {
    result = num1 ** i;
  }
  return result;
}
console.log(exponent(10, 5));
