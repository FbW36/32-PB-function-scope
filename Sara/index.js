// 1) Write a function that accepts two numbers and validate that they are numbers. 
const myNumbers = [];
function checkNumbers(numOne, numTwo){
     if(typeof numOne !== "number" || typeof numTwo !== "number"){
        return console.log(`Error, the input is not a number!`); 
    }
    for(let i = 1; i <= numTwo; i++) {
        myNumbers.push(numOne ** i);
    }
    console.log(myNumbers);
}
checkNumbers("3", 5) ; // Error, the input is not a number!
checkNumbers(2, 8) ; // [ 2, 4, 8,  16, 32, 64, 128, 256 ]

//! new try 

const newArr = [];
function checkMyNumbers(a, b){
    if(isNaN(a) || isNaN(b)){
        return `${a} or ${b} is Not a Number (or both)!!`
    }else{
        for(let i = 1; i <= b; i++){
            newArr.push(a ** i)
        }
    } return newArr; 
}

console.log("checkMynumbers ==>", checkMyNumbers(3, 5)); // [ 3, 9, 27, 81, 243 ]
console.log("checkMynumbers ==>", checkMyNumbers("hello", 5)); // hello or 5 is Not a Number!

// 2) Create a function named `printFavoriteFruit`. Declare a variable outside of the function and store your favorite fruit as a value. Reassign the variable within the function and print "My favorite fruit is: _x_". 
const myFavoriteFruit = "apple";
function printFavoriteFruit(a){
    return `Hello, im Sara! My favorite fruit is ${myFavoriteFruit} 🍎!`
}
console.log(printFavoriteFruit(myFavoriteFruit)) ; // Hello, im Sara! My favorite fruit is apple 🍎!

// 3) Create a function named `exponent` that takes two numbers as parameters. The second parameter defines how many times the first number should be multiplied by itself. Save the output in a variable named `result`.
//Then, try to access the variable `result` outside of the `exponent` function. Is this possible? Why/Why not? Comment your answer in the `index.js` file.
function exponent(num, howManyTimes){
    const result = [] ;
    for(let i = 1; i <= howManyTimes; i++){
        result.push(num ** i); 
    }
    return result ; 
} 

console.log("exponent ==>", exponent(10, 3)) ; // [ 10, 100, 1000 ]
// console.log(result) ; // ReferenceError: result is not defined 
 