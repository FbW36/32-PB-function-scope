// 1. Print Exponential Values
// Write a function that accepts two numbers and validate that they are numbers.
// After that, the function should print y exponential values starting from x.

// For example if we have function(3, 5) The function should print 3 9 27 81 243. Prints 5 exponential values of 3.
// function(2, 8) The function prints 2 4 8 16 32 64 128 256. Prints 8 exponential values of 2.
function checckValue(num1, num2) {
  let num3 = "";
  if (typeof num1 === "number" && typeof num2 === "number") {
    for (let i = 1; i <= num2; i++) {
      let numAdd = num1 ** i;
      num3 = num3.concat(numAdd, " ");
    }
  }
  return num3;
}

console.log(checckValue(3, 5));
console.log(checckValue(2, 8));

// 2. Fruits
// Create a function named printFavoriteFruit. Declare a variable outside of the function and store your favorite fruit as a value. Reassign the variable within the function and print "My favorite fruit is: x".
let favFruit = "Mango";
function printFavoriteFruit() {
  favFruit = "Fig";
  return favFruit;
}
console.log("My favorite fruit is:", printFavoriteFruit());

// 3. Multiply a Number by Itself
// Create a function named exponent that takes two numbers as parameters. The second parameter defines how many times the first number should be multiplied by itself. Save the output in a variable named result.
function exponent(x, y) {
  let result = x ** y;
  console.log(result); // 64 ==> the output won't be excuted if the function is not called.
}
exponent(4, 3);

// Then, try to access the variable result outside of the exponent function. Is this possible? Why/Why not? Comment your answer in the index.js file.
//! console.log(result);
// ==> result is not defined because it is in outside of function scope. It is declared inside function, so it only works inside of function, not outside.

function sumOfNumbers(num1, num2) {
  sum = [num1];
  for (let i = 1; i < num2; i++) {
    numToPush = sum[sum.length - 1] * num1;
    sum.push(numToPush);
  }
  return sum.join(" ");
}

console.log(sumOfNumbers(2, 8));
