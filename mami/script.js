// # 32-PB-function-scope
// # Function Scope

// #### 1. Print Exponential Values
// * Write a function that accepts two numbers and validate that they are numbers.
function exponential(number, times) {
  let answer = [];
  if (typeof number !== "number" || typeof times !== "number") {
    return `oops it is not  number`;
  } else
    for (let i = 1; i <= times; i++) {
      answer.push(number ** i);
    }
  return `${times} exponential values starting from ${number}: ${answer}`;
}

console.log(exponential(3, 5));
console.log(exponential(2, 8));

// After that, the function should print _y_ exponential values starting from _x_.

// * For example if we have function(3, 5) The function should print `3 9 27 81 243`. Prints 5 exponential values of 3.
// * function(2, 8) The function prints `2 4 8 16 32 64 128 256`. Prints 8 exponential values of 2.

// #### 2. Fruits
// * Create a function named `printFavoriteFruit`. Declare a variable outside of the function and store your favorite fruit as a value. Reassign the variable within the function and print "My favorite fruit is: _x_".
let fruits = "mango";
function printFavoriteFruit() {
  fruits = "banana";
  //   return `My favorite fruit is: ${fruits}`;
  console.log(`My favorite fruit is: ${fruits}`);
}

printFavoriteFruit();

// #### 3. Multiply a Number by Itself
// * Create a function named `exponent` that takes two numbers as parameters. The second parameter defines how many times the first number should be multiplied by itself. Save the output in a variable named `result`.
// * Then, try to access the variable `result` outside of the `exponent` function. Is this possible? Why/Why not? Comment your answer in the `index.js` file.

function exponent(num, num2) {
  let result = num ** num2;

  return num ** num2;
}

console.log(exponent(3, 6));
// console.log(result); //result is not defined
// variable is not accessed from outside scope
