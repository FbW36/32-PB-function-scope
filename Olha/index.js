//* 1. Print Exponential Values
//? Write a function that accepts two numbers and validate that they are numbers.
//? After that, the function should print y exponential values starting from x.

function printExponentialValues(start, count) {
	if (typeof start !== "number" || typeof count !== "number") {
		return console.log("The function should accept only numbers!");
	}
	for (let i = 1; i <= count; i++) {
		console.log(start ** i);
	}
}
printExponentialValues(2, 8); // 2 4 8 16 32 64 128 256
printExponentialValues("2", 8); // The function should accept only numbers!


//* 2. Fruits
//? Create a function named printFavoriteFruit. Declare a variable outside of the function and store your favorite fruit as a value. Reassign the variable within the function and print "My favorite fruit is: x".

let myFavFruit = "banana";

function printFavoriteFruit() {
	myFavFruit = "cherimoya";
	console.log(`My favorite fruit is ${myFavFruit}.`);
}

printFavoriteFruit(); // My favorite fruit is cherimoya.


//* 3. Multiply a Number by Itself
//? Create a function named exponent that takes two numbers as parameters. The second parameter defines how many times the first number should be multiplied by itself. Save the output in a variable named result.
//? Then, try to access the variable result outside of the exponent function. Is this possible? Why/Why not? Comment your answer in the index.js file.

function exponent(num, counter) {
	const result = [];

	for (let i = 1; i <= counter; i++) {
		result.push(num ** i);
	}

	return result;
}

console.log(exponent(2, 5)); // [ 2, 4, 8, 16, 32 ]

//! console.log(result); // ReferenceError: result is not defined
//! the variable result cannot be accessed from outside of the scope in which it was declared
