let log = console.log;

// Write a function that accepts two numbers and validate that they are numbers.
// After that, the function should print y exponential values starting from x
const exponentialsOfX = [];
function checkIfNumber(x, y) {
  if (typeof x == "number" && typeof y == "number") {
    log(x + " and " + y + " are numbers");
    for (i = 1; i <= y; i++) {
      exponentialsOfX.push(Math.pow(x, i));
    }
    log(`exponential growth of ${x} goes like: ${exponentialsOfX.join(", ")}`);
  } else {
    log(
      "All the time in the world we have. Submit two numbers you once, continue we will."
    );
  }
}
checkIfNumber(5, 7);

// Create a function named printFavoriteFruit. Declare a variable outside of the function and store your favorite fruit as a value. Reassign the variable within the function and print "My favorite fruit is: x".
let favoriteFruit = "kiwi";
function printFavoriteFruit(str) {
  favoriteFruit = 'strawberries';
  log('favourite fruit -->', favoriteFruit)
}
printFavoriteFruit(favoriteFruit);

// Create a function named exponent that takes two numbers as parameters. The second parameter defines how many times the first number should be multiplied by itself. Save the output in a variable named result
function exponent(num1, num2) {
  const result = [];
  for (i = 1; i <= num2; i++) {
    result.push(Math.pow(num1, i));
  }
  log("result -->", result);
}
exponent(4, 5);

// log(result) --> gives ReferenceError because the variable is declared in a lexical scope and therefore cannot be accessed from outer scopes
