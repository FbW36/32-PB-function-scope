// * Write a function that accepts two numbers and validate that they are numbers.
// After that, the function should print _y_ exponential values starting from _x_.

function sumOfNumbers(num1, num2) {
  sum = [num1];
  for (let i = 1; i < num2; i++) {
    numToPush = sum[sum.length - 1] * num1;
    sum.push(numToPush);
  }
  return sum.join(" ");
}

console.log(sumOfNumbers(2, 8));

// * Create a function named `printFavoriteFruit`.Declare a variable outside of the function and store your favorite fruit as a value.Reassign the variable within the function and print "My favorite fruit is: _x_".

let favouriteFruit = "Strawberry";

function printFavoriteFruit(favouriteFruit) {
  return `My favourite fruit is: ${favouriteFruit}`;
}

console.log(printFavoriteFruit(favouriteFruit));

// * Create a function named `exponent` that takes two numbers as parameters.The second parameter defines how many times the first number should be multiplied by itself.Save the output in a variable named`result`.

function exponent(num1, num2) {
  let result = Math.pow(num1, num2);
  return result;
}

console.log(exponent(2, 6));

// result right now is a local variable not a global variable so this ==>
// console.log(result); ==
// will fail
