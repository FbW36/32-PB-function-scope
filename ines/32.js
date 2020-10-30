//1
function exponential(number1, number2) {
  let initialResult = 1;
  const results = [];
  if (typeof number1 === "number" && typeof number2 === "number") {
    for (i = 1; i <= number2; i++) {
      initialResult *= number1;
      results.push(initialResult);
      resultsFinal = results.join(" ");
    }
    return resultsFinal;
  } else {
    return "The inputs are not numbers";
  }
}
console.log(exponential(2, 8));

//2
function printFavoriteFruit(fruit) {
  return "My favorite fruit is: " + fruit + ".";
}

console.log(printFavoriteFruit("grapes"));

//3

function exponent(num1, num2) {
  let initial = 1;
  const result = [];
  for (i = 1; i <= num2; i++) {
    initial *= num1;
    result.push(initial);
  }
  return result;
}
console.log(exponent(2, 5));

// you cannot call result because it's scope is only inside the funtion
