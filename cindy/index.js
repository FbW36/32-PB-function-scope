//32-PB-function-scope
//Function Scope
//1. Print Exponential Values
//Write a function that accepts two numbers and validate that they are numbers.
//After that, the function should print y exponential values starting from x.
//For example if we have function(3, 5) The function should print 3 9 27 81 243. Prints 5 exponential values of 3.
//function(2, 8) The function prints 2 4 8 16 32 64 128 256. Prints 8 exponential values of 2.
const power = (base, exponent) =>{
    
         let result = 1
         for(let i=0; i < exponent; i++){
            result = result * base
         }
         return result
    }
    console.log("power ==> ", power(2,4))
//     2. Fruits

//     Create a function named printFavoriteFruit. Declare a variable outside of the function and store your favorite fruit as a value. Reassign the variable within the function and print "My favorite fruit is: x".
function printFavoriteFruit(){
    return myFruit
}
let myFruit = 'cherries'
console.log("my favorite fruit is => ", printFavoriteFruit())


// 3. Multiply a Number by Itself

//     Create a function named exponent that takes two numbers as parameters. The second parameter defines how many times the first number should be multiplied by itself. Save the output in a variable named result.
//     Then, try to access the variable result outside of the exponent function. Is this possible? Why/Why not? Comment your answer in the index.js file.

const exponent = (base, exponent) =>{
         let result = 1
         for(let i=0; i < exponent; i++){
            result = result * base
         }
         return result
    }
    console.log("power ==> ", power(2,4))
    //console.log(result)
//It is not possible to acces the result variable because it's only a local variable. 