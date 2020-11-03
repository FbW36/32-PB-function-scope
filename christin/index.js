//1. Print Exponential Values
//Write a function that accepts two numbers and validate that they are numbers.
//After that, the function should print y exponential values starting from x.

/*
- For example if we have function(3, 5) The function should print 3 9 27 81 243. Prints 5 exponential values of 3.
- function(2, 8) The function prints 2 4 8 16 32 64 128 256. Prints 8 exponential values of 2.*/

function getExponents(number, value) {
  let box = [];
  let zahl = 1;
  //if (number === typeof Number && value === typeof Number) {
  for (let i = 1; i <= value; i++) {
    let res = (zahl *= number);
    box.push(res);
    //Math.pow(number, value)
  }
  console.log(box);
}
getExponents(2, 8);

/*2. Fruits
Create a function named . Declare a variable outside of the function and store your favorite fruit as a value. Reassign the variable within the function and print "My favorite fruit is: x".*/

let fruits = ["mango", "coconut", "pineapple", "cucumber"];

// option 1

function printFavoriteFruit() {
  console.log(`My favorite fruit is ${fruits[0]}.`);
}

printFavoriteFruit();

// option 2

function printFavoriteFruit2() {
  for (i = 0; i < fruits.length; i++) {
    console.log(`my favorite fruit is: ${fruits[i]}`);
  }
}
printFavoriteFruit2();

/* 3. Multiply a Number by Itself
Create a function named exponent that takes two numbers as parameters. The second parameter defines how many times the first number should be multiplied by itself. Save the output in a variable named result.
Then, try to access the variable result outside of the exponent function. Is this possible? Why/Why not? Comment your answer in the index.js file.*/

function exponent(value1, value2) {
  let result = Math.pow(value1, value2);
  console.log(result);
}
exponent(3, 5);

//?console.log(result); // error : result is not defined
// cant access the variable result from outside the function scope, cause its in the function scope (if you dont set the let, you can). if u wanna use the variable constantly you need to set it in the global scope, outside the function.
