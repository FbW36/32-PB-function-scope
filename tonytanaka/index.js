// 1
const box1 = [];
function validateNumbers(x, y) {
  if (isNaN(x) != true || isNaN(x) != true) {
    for (a = 1; a <= y; a++) {
      box1.push(x ** a);
    }
  }
  return box1;
}
//console.log(validateNumbers(3, 5));
console.log(validateNumbers(2, 8));

// 2
function printFavoriteFruits(favFruit) {
  return `My favorite fruit is ${favFruit}`;
}
let favFruit = "Strawberry";
console.log(printFavoriteFruits(favFruit));

// 3
function exponent(x, y) {
  let result = x ** y;
  return result;
}

console.log(exponent(2, 3));
console.log(result);
// the variable 'result' is not defined outside de for-loop,
// so an error will be shown