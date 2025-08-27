// numbers.js

// 1. Basic math functions
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "Error: cannot divide by zero";
  }
  return a / b;
}

// 2. Using built-in Math object
function getRandomInt(min, max) {
  // returns a random integer between min and max (inclusive)
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getSquareRoot(num) {
  return Math.sqrt(num);
}

console.log("Infinity example:", 1 / 0);
console.log("NaN example:", "abc" * 3);

console.log(add(3, 7)); // 10
console.log(divide(10, 0)); // "Error..."
console.log(getRandomInt(1, 10));
console.log(getSquareRoot(25)); // 5
