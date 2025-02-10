// Main container for the calculator
const calculator = document.querySelector(".container");
let a = [];
let b = [];
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
expression.textContent = "";

// Create text box for input
const result = document.createElement("div");
result.classList.add("result");
result.textContent = "";

// Create number buttons
const numbers = [];
for (let num = 0; num < 10; num++) {
  numbers[num] = document.createElement("button");
  numbers[num].classList.add("number");
  numbers[num].textContent = num;
}

decimalButton = document.createElement("button");
decimalButton.classList.add("number");
decimalButton.textContent = ".";

// Create Operators
plusButton = document.createElement("button");
plusButton.classList.add("operator");
plusButton.textContent = "+";

minusButton = document.createElement("button");
minusButton.classList.add("operator");
minusButton.textContent = "-";

multiplicationButton = document.createElement("button");
multiplicationButton.classList.add("operator");
multiplicationButton.textContent = "x";

divisionButton = document.createElement("button");
divisionButton.classList.add("operator");
divisionButton.textContent = String.fromCharCode(247); // Divide symbol

equalsButton = document.createElement("button");
equalsButton.classList.add("operator");
equalsButton.textContent = "=";

// Delete button
deleteButton = document.createElement("button");
deleteButton.classList.add("functional");
deleteButton.textContent = "DEL";

// Clear All button
allClearButton = document.createElement("button");
allClearButton.classList.add("functional");
allClearButton.textContent = "AC";

// Build row 1
rows[0].appendChild(expression);

// Build row 2
rows[1].appendChild(result);

// Build row 3
rows[2].appendChild(deleteButton);
rows[2].appendChild(allClearButton);
rows[2].appendChild(divisionButton);

// Build row 4
rows[3].appendChild(numbers[7]);
rows[3].appendChild(numbers[8]);
rows[3].appendChild(numbers[9]);
rows[3].appendChild(multiplicationButton);

// Build row 5
rows[4].appendChild(numbers[4]);
rows[4].appendChild(numbers[5]);
rows[4].appendChild(numbers[6]);
rows[4].appendChild(minusButton);

// Build row 6
rows[5].appendChild(numbers[1]);
rows[5].appendChild(numbers[2]);
rows[5].appendChild(numbers[3]);
rows[5].appendChild(plusButton);

// Build row 7
rows[6].appendChild(numbers[0]);
rows[6].appendChild(decimalButton);
rows[6].appendChild(equalsButton);

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
