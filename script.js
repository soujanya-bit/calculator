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
        return "Error: Cannot divide by zero";
    }
    return a / b;
}
function operate(operator, a, b) {
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        default:
            return "Error: Invalid operator";
    }
}
const display = document.getElementById("display");
let firstOperand = null;
let secondOperand = null;
let currentOperator = null;
let shouldResetDisplay = false;

function clearDisplay() {
    display.textContent = "0";
    firstOperand = null;
    secondOperand = null;
    currentOperator = null;
}

function appendNumber(number) {
    if (display.textContent === "0" || shouldResetDisplay) {
        display.textContent = number;
        shouldResetDisplay = false;
    } else {
        display.textContent += number;
    }
}

function setOperator(operator) {
    if (currentOperator !== null) {
        evaluate();
    }
    firstOperand = parseFloat(display.textContent);
    currentOperator = operator;
    shouldResetDisplay = true;
}

function evaluate() {
    if (currentOperator === null || shouldResetDisplay) return;
    secondOperand = parseFloat(display.textContent);
    const result = operate(currentOperator, firstOperand, secondOperand);
    display.textContent = Number.isFinite(result) ? result.toFixed(2) : result;
    firstOperand = result;
    currentOperator = null;
}
const digits = document.querySelectorAll(".digit");
const operators = document.querySelectorAll(".operator");
const clearButton = document.getElementById("clear");
const equalsButton = document.getElementById("equals");

digits.forEach((button) =>
    button.addEventListener("click", () => appendNumber(button.textContent))
);

operators.forEach((button) =>
    button.addEventListener("click", () => setOperator(button.textContent))
);

clearButton.addEventListener("click", clearDisplay);
equalsButton.addEventListener("click", evaluate);
function divide(a, b) {
    if (b === 0) {
        return "Error: Cannot divide by zero";
    }
    return a / b;
}

function evaluate() {
    if (currentOperator === null || shouldResetDisplay) return;
    secondOperand = parseFloat(display.textContent);
    if (currentOperator === "/" && secondOperand === 0) {
        display.textContent = "Error: Cannot divide by zero";
        clearDisplay();
        return;
    }
    const result = operate(currentOperator, firstOperand, secondOperand);
    display.textContent = Number.isFinite(result) ? result.toFixed(2) : result;
    firstOperand = result;
    currentOperator = null;
}
