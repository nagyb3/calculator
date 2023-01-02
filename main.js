//OPERATOR FUNCTIONS OK
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}

function operate(operator, a, b) {
    if (operator === '+') {
        return add(a, b);
    } else if (operator === '-') {
        return subtract(a, b);
    } else if (operator === '*') {
        return multiply(a, b);
    } else if (operator === '/') {
        return divide(a, b);
    }
}

//CHOSING OPERATORS: OK
let chosenOperator = undefined;

const addBtn = document.querySelector('#add');
const subtractBtn = document.querySelector('#subtract');
const multiplyBtn = document.querySelector('#multiply');
const divideBtn = document.querySelector('#divide');

addBtn.addEventListener('click', () => {
    if (chosenOperator === undefined) {
        chosenOperator = "+"
        updateDisplay("+");
    }
})

subtractBtn.addEventListener('click', () => {
    if (chosenOperator === undefined) {
        chosenOperator = "-";
        updateDisplay("-");
    }
})

multiplyBtn.addEventListener('click', () => {
    if (chosenOperator === undefined) {
        chosenOperator = '*';
        updateDisplay("*");
    }
})

divideBtn.addEventListener('click', () => {
    if (chosenOperator === undefined) {
        chosenOperator = "/";
        updateDisplay("/");
    }
})

let firstNumber = 0;
let secondNumber = 0;

const zero = document.querySelector('#zero');
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');


//STORE NUMBER: OK
function storeNumber(numberId) {
    if (chosenOperator === undefined) {
        firstNumber = firstNumber * 10 + numberId;
    } else {
        secondNumber = secondNumber * 10 + numberId;
    }
}

zero.addEventListener('click', () => {
    storeNumber(0); updateDisplay(0);
})

one.addEventListener('click', () => {
    storeNumber(1); updateDisplay(1);
})

two.addEventListener('click', () => {
    storeNumber(2); updateDisplay(2);
})

three.addEventListener('click', () => {
    storeNumber(3); updateDisplay(3);
})

four.addEventListener('click', () => {
    storeNumber(4); updateDisplay(4);
})

five.addEventListener('click', () => {
    storeNumber(5); updateDisplay(5);
})

six.addEventListener('click', () => {
    storeNumber(6); updateDisplay(6);
})

seven.addEventListener('click', () => {
    storeNumber(7); updateDisplay(7);
})

eight.addEventListener('click', () => {
    storeNumber(8); updateDisplay(8);
})

nine.addEventListener('click', () => {
    storeNumber(9); updateDisplay(9)
})

// TODO: RESULT AREA DOESNT REFRESH WHEN A BUTTON IS PUSHED
const resultBtn = document.querySelector('.equals');
const resultArea = document.querySelector('.display');

resultBtn.addEventListener('click', () => {
    console.log(chosenOperator, firstNumber, secondNumber, operate(chosenOperator, firstNumber, secondNumber))
    updateDisplay('result')
    firstNumber = 0;
    secondNumber = 0;
    chosenOperator = undefined;
})

//  CLEAR BUTTON: OK
const clearBtn = document.querySelector('.clear');

clearBtn.addEventListener('click', () => {
    updateDisplay('clear')
    firstNumber = 0;
    secondNumber = 0;
    chosenOperator = undefined;
})

let displayValue = "0"
function updateDisplay(parameter) {
    if (parameter === 'clear') {
        displayValue = "0";
    } else if (parameter === 'result') {
        displayValue = operate(chosenOperator, firstNumber, secondNumber);
    } else if (parameter === 0 || parameter === "0") {
        if (displayValue !== "0") {
            displayValue += "0";
        }
    } else {
        if (displayValue === "0") {
            displayValue = parameter;
        } else {
            displayValue += String(parameter)
        }
    }
    resultArea.textContent = displayValue;
}