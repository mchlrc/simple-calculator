// Main container for the calculator
const calculator = document.querySelector(".container");
let a = null;
let b = null;
let operator = "";

// Create rows to house buttons and text boxes
const rows = [];
for (let i = 0; i < 7; i++) {
  rows[i] = document.createElement("div");
  rows[i].classList.add("row");
  calculator.appendChild(rows[i]);
}

// Create text box for input
expression = document.createElement("div");
expression.classList.add("expression");
expression.textContent = "1 + 2";
rows[0].appendChild(expression);

// Create text box for input
result = document.createElement("div");
result.classList.add("result");
result.textContent = "3";
rows[1].appendChild(result);

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
    return "DIVBY0";
  } else {
    return a / b;
  }
}

function operate(a, b, operator) {
  let result = "";
  switch (operator) {
    case "+":
      result = add(a, b);
    case "-":
      result = subtract(a, b);
    case "x":
      result = multiply(a, b);
    case "÷":
      result = divide(a, b);
    default:
      result = "ERROR";
  }
  return result;
}
