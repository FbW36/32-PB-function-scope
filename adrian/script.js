//1
function validate(a, b) {
  let result = 1;
  if (typeof a !== "number" || typeof b !== "number") {
    console.log("Give me tow numbers!");
    return;
  }
  for (let i = 1; i <= b; i++) {
    result *= a;
    console.log(result);
  }
}
// validate(2, 8);

//2
let favoriteFruit = "mango";
function printFavoriteFruit() {
  favoriteFruit = "avocado";
  console.log(`My favorite fruit is ${favoriteFruit}`);
}
// printFavoriteFruit();

//3
function powerRecursive(base, exponent) {
  if (exponent === 0) {
    return 1;
  } else {
    return powerRecursive(base, exponent - 1) * base;
  }
}
function power(base, exponent) {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }

  return result;
}
console.log(power(2, 6));
console.log(powerRecursive(2, 6));

//It is not possible to access result outside the function
// because variables created inside functions with
//let or const are just visible within the function scope.
