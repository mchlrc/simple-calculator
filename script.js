// Main container for the calculator
const calculator = document.querySelector(".container");
let left = [];
let right = [];
let operator = "";
let result = 0;
let lastPress = "";

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
const resultBox = document.createElement("div");
resultBox.classList.add("result");
resultBox.textContent = "0";

// Create number buttons
const numberButtons = [];
for (let num = 0; num < 10; num++) {
  numberButtons[num] = document.createElement("button");
  numberButtons[num].classList.add("number");
  numberButtons[num].textContent = num;
}

decimalButton = document.createElement("button");
decimalButton.classList.add("number");
decimalButton.textContent = ".";

// Create Operators
const operatorButtons = [];
plusButton = document.createElement("button");
plusButton.classList.add("operator");
plusButton.textContent = "+";
operatorButtons.push(plusButton);

minusButton = document.createElement("button");
minusButton.classList.add("operator");
minusButton.textContent = "-";
operatorButtons.push(minusButton);

multiplicationButton = document.createElement("button");
multiplicationButton.classList.add("operator");
multiplicationButton.textContent = "x";
operatorButtons.push(multiplicationButton);

divisionButton = document.createElement("button");
divisionButton.classList.add("operator");
divisionButton.textContent = String.fromCharCode(247); // Divide symbol
operatorButtons.push(divisionButton);

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
rows[1].appendChild(resultBox);

// Build row 3
rows[2].appendChild(deleteButton);
rows[2].appendChild(allClearButton);
rows[2].appendChild(divisionButton);

// Build row 4
rows[3].appendChild(numberButtons[7]);
rows[3].appendChild(numberButtons[8]);
rows[3].appendChild(numberButtons[9]);
rows[3].appendChild(multiplicationButton);

// Build row 5
rows[4].appendChild(numberButtons[4]);
rows[4].appendChild(numberButtons[5]);
rows[4].appendChild(numberButtons[6]);
rows[4].appendChild(minusButton);

// Build row 6
rows[5].appendChild(numberButtons[1]);
rows[5].appendChild(numberButtons[2]);
rows[5].appendChild(numberButtons[3]);
rows[5].appendChild(plusButton);

// Build row 7
rows[6].appendChild(numberButtons[0]);
rows[6].appendChild(decimalButton);
rows[6].appendChild(equalsButton);

// Add event listeners to numbers
for (let num of numberButtons) {
  num.addEventListener("click", (event) => {
    if (operator === "") {
      left.push(event.target.textContent);
      updateExpression();
    } else {
      right.push(event.target.textContent);
      updateExpression();
    }
    lastPress = event.target.textContent;
  });
}

for (let operatorButton of operatorButtons) {
  operatorButton.addEventListener("click", (event) => {
    if (operator === "") {
      operator = event.target.textContent;
      updateExpression();
    } else if (lastPress === "=") {
      operator = event.target.textContent;
      let tempArr = String(Number.parseFloat(result)).split("");
      left = tempArr.slice();
      result = 0;
      right = [];
      updateExpression();
      updateResult();
    }
    lastPress = event.target.textContent;
  });
}

// Add event listener to decimal button
decimalButton.addEventListener("click", (event) => {
  if (operator === "") {
    if (!left.includes(".")) {
      left.push(event.target.textContent);
      updateExpression();
    }
  } else {
    if (!right.includes(".")) {
      right.push(event.target.textContent);
      updateExpression();
    }
  }
  lastPress = event.target.textContent;
});

// Add event listener to equals button
equalsButton.addEventListener("click", (event) => {
  if (left.length > 0 && right.length > 0 && operator.length > 0) {
    result = operate(left, right, operator);
    updateResult();
  }
  lastPress = event.target.textContent;
});

// Add event listener to clear all button
allClearButton.addEventListener("click", (event) => {
  clearAll();
  lastPress = event.target.textContent;
});

// Add event listener to delete button
deleteButton.addEventListener("click", (event) => {
  backSpace();
  lastPress = event.target.textContent;
});

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
    return "DIVBYZERO";
  } else {
    return a / b;
  }
}

function operate(a, b, operator) {
  a = Number.parseFloat(a.join(""));
  b = Number.parseFloat(b.join(""));
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "x":
      return multiply(a, b);
    case String.fromCharCode(247): // Divide
      return divide(a, b);
    default:
      return "ERROR";
  }
}

function updateExpression() {
  let leftHand = "";
  if (left.length !== 0) {
    leftHand = left.join("");
  }

  let rightHand = "";
  if (right.length !== 0) {
    rightHand = right.join("");
  }
  leftHand = formatNumber(leftHand, 7);
  rightHand = formatNumber(rightHand, 7);
  expression.textContent = `${leftHand} ${operator} ${rightHand}`;
}

function updateResult() {
  resultBox.textContent = `${formatNumber(result, 10)}`;
}

function formatNumber(num, length) {
  if (num.toString().length > length) {
    return Number.parseFloat(num).toExponential(2);
  } else {
    return num;
  }
}

function clearAll() {
  while (left.length > 0) {
    left.shift(1);
  }
  while (right.length > 0) {
    right.shift(1);
  }
  operator = "";
  updateExpression();
  result = 0;
  updateResult();
}

function backSpace() {
  if (right.length > 0) {
    right.shift(1);
  } else if (operator !== "") {
    operator = "";
  } else if (left.length > 0) {
    left.shift(1);
  }
  updateExpression();
}
