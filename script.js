let firstOperand = '';
let secondOperand = '';
let currentOperation = null;
let shouldResetScreen = false;

const numberButtons = document.querySelectorAll('.number-btn');
const operatorButtons = document.querySelectorAll(".operation-btn");
const equalsButton = document.querySelector('.equals-btn');
const clearButton = document.querySelector('#clearbtn');
const deleteButton = document.querySelector('#deletebtn');
const pointButton = document.querySelector('#decimalsign');
const lastOperationScreen = document.getElementById('lastOperationScreen');
const currentOperationScreen = document.getElementById('currentOperationScreen');


equalsButton.addEventListener('click', evaluate);
clearButton.addEventListener('click', clear);
deleteButton.addEventListener('click', deleteNumber);
pointButton.addEventListener('click', appendPoint);

numberButtons.forEach((button) =>
    button.addEventListener('click', () => appendNumber(button.textContent))
)

operatorButtons.forEach((button) =>
    button.addEventListener('click', () => setOperation(button.textContent))
)

function appendNumber(number) {
    if (currentOperationScreen.textContent === '0' || shouldResetScreen)
        resetScreen()
    currentOperationScreen.textContent += number;
}

function resetScreen() {
    currentOperationScreen.textContent = '';
    shouldResetScreen = false;
}

function clear() {
    currentOperationScreen.textContent = '0';
    lastOperationScreen.textContent = '';
    firstOperand = '';
    secondOperand = '';
    currentOperation = null;
}

function appendPoint() {
    if (shouldResetScreen) resetScreen()
    if (currentOperationScreen.textContent === '')
        currentOperationScreen.textContent = '0'
}

function deleteNumber() {
    currentOperationScreen.textContent = currentOperationScreen.textContent
        .toString()
        .slice(0, -1)
}

function setOperation(operator) {
    if (currentOperation !== null) evaluate()
    firstOperand = currentOperationScreen.textContent;
    currentOperation = operator;
    lastOperationScreen.textContent = `${firstOperand} ${currentOperation}`;
    shouldResetScreen = true;
}

function evaluate() {
    if (currentOperation === null || shouldResetScreen)
        return
    if (currentOperation === '÷' && currentOperationScreen.textContent === '0') {
        alert("You can't divide by 0!")
        return
    }
    secondOperand = currentOperationScreen.textContent;
    currentOperationScreen.textContent = roundResult(
        operate(currentOperation, firstOperand, secondOperand)
    )
    lastOperationScreen.textContent = `${firstOperand} ${currentOperation} ${secondOperand} =`
    currentOperation = null;
}

function roundResult(number) {
    return Math.round(number * 1000) / 1000
}
function add(a, b) {
    return a + b;
}

function substract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    a = Number(a);
    b = Number(b);
    switch (operator) {
        case '+':
            return add(a, b)
        case '-':
            return substract(a, b)
        case '*':
            return multiply(a, b)
        case '÷':
            if (b === 0) return null
            else return divide(a, b)
        default:
            return null
    }
}

