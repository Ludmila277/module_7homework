function calculate(a, b, operator) {
  return operator(a, b);
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}
function division(a, b) {
  return a / b;
}
const tworesult = [2, 3, add];
const result = calculate.apply(null, tworesult);
console.log(result);
