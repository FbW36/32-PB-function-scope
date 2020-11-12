// # 32-PB-function-scope
// # Function Scope

// #### 1. Print Exponential Values
const result = [];
function numberValidator(number, amount) {
    if (typeof number == "number" && typeof amount == "number") {
        for (i = 1; i <= amount; i++) {
            result.push(number ** i);
        }
    } else console.log(`Error: this function just accepts numbers`);
    return result;
}
console.log(`1. Print Exponential Values ==>`, numberValidator(3, 5)); // [ 3, 9, 27, 81, 243 ]


// #### 2. Fruits
let favFruit = "apple";
function printFavoriteFruit() {
    favFruit = "watermelon";
    console.log(`2. My favorite fruit is ${favFruit}`);
}
printFavoriteFruit();

// #### 3. Multiply a Number by Itself
// * Create a function named `exponent` that takes two numbers as parameters. The second parameter defines how many times the first number should be multiplied by itself. Save the output in a variable named `result`. 
// * Then, try to access the variable `result` outside of the `exponent` function. Is this possible? Why/Why not? Comment your answer in the `index.js` file.
let result2 = [];
function exponent(base, exponent) {
    let result2 = 1;
    for (i = 0; i < exponent; i++) {
        result2 = result2 * base;
    }
    return result2;
}
console.log(`3. Multiply a Number by Itself ==> ${exponent(2, 4)}`); // 16 


