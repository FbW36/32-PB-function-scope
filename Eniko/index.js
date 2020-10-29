//1. Print Exponential Values
// Write a function that accepts two numbers and validate that they are numbers.
// After that, the function should print y exponential values starting from x.
let num1 = 3;
let num2 = 5;
function exponential(num1, num2){
    let trythis = [];
    if (typeof num1 !== 
        "number" || typeof num2 !== "number"){
        console.log("Numbers are accepted only, please")
    } else {
        for (let i = 0; i <= num2; i++){
            result = Math.pow(num1, i);
            console.log(result);
            trythis.push(result);
        }
    }
    return trythis;
}
console.log(exponential(num1, num2));

// For example if we have function(3, 5) The function should print 3 9 27 81 243. Prints 5 exponential values of 3.
// function(2, 8) The function prints 2 4 8 16 32 64 128 256. Prints 8 exponential values of 2.

// 2. Fruits
// Create a function named printFavoriteFruit. Declare a variable outside of the function and store your favorite fruit as a value. Reassign the variable within the function and print "My favorite fruit is: x".
let favFruit = "raspberry";
function printFavoriteFruit(str){
    return `My favorite fuit is: ${str}.`;
}
console.log(printFavoriteFruit(favFruit));
// 3. Multiply a Number by Itself
// Create a function named exponent that takes two numbers as parameters. The second parameter defines how many times the first number should be multiplied by itself. Save the output in a variable named result.
let num3 = 4;
function exponent(num){
    let result2 = num ** num;
    return result2;
}
console.log(exponent(num3));
// Then, try to access the variable result outside of the exponent function. Is this possible? Why/Why not? Comment your answer in the index.js file.
//it is possible, i put a placeholder for the variable in the function.