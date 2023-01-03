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




const addBtn = document.querySelector('#add');
const subtractBtn = document.querySelector('#subtract');
const multiplyBtn = document.querySelector('#multiply');
const divideBtn = document.querySelector('#divide');

addBtn.addEventListener('click', () => {
    updateString('+');
})

subtractBtn.addEventListener('click', () => {
    updateString('-');
})

multiplyBtn.addEventListener('click', () => {
    updateString('*');
})

divideBtn.addEventListener('click', () => {
    updateString('/');
})

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

zero.addEventListener('click', () => {
    updateString(0);
})

one.addEventListener('click', () => {
    updateString(1);
})

two.addEventListener('click', () => {
    updateString(2);
})

three.addEventListener('click', () => {
    updateString(3);
})

four.addEventListener('click', () => {
    updateString(4);
})

five.addEventListener('click', () => {
    updateString(5);
})

six.addEventListener('click', () => {
    updateString(6);
})

seven.addEventListener('click', () => {
    updateString(7);
})

eight.addEventListener('click', () => {
    updateString(8);
})

nine.addEventListener('click', () => {
    updateString(9);
})

const resultBtn = document.querySelector('.equals');
const resultArea = document.querySelector('.display');

let evalString = "0";
resultArea.textContent = evalString;

function updateString(p) {
    if (evalString === "0" && p !== 0 && p !== 'clear') {
        evalString = p;
    } else if (p === 'back') {
        evalString = evalString.slice(0, -1);
    } else if (p === 'clear') {
        evalString = "0";
    } else {
        evalString += String(p);
    }
    console.log(evalString)
    resultArea.textContent = evalString;
}

let result = 0;
let numbersArray = [];
let operatorArray = [];
let numberIndex = 0;
let makeZeroDivisonError = false;

resultBtn.addEventListener('click', () => {
    for (let i = 0; i < evalString.length; i++) {
        if ([...'*/-+'].includes(evalString[i])){
            operatorArray.push(evalString[i]);
            numberIndex++;
        } else {
            if (numbersArray[numberIndex] === undefined) {
                numbersArray[numberIndex] = evalString[i];
            } else {
                numbersArray[numberIndex] += String(evalString[i]);
            }
        }
    }
    if (numbersArray.length - 1 !== operatorArray.length) {
        result = "ERROR!";
    }
    while (operatorArray.includes("*") || operatorArray.includes("/")) { //EVALUTATE MULTIPLY AND DIVIDE OPERATORS
        for (let i = 0; i < operatorArray.length; i++) {
            if ([..."*/"].includes(operatorArray[i])){
                if (operatorArray[i] === "/" && Number(numbersArray[i+1]) === 0){
                    makeZeroDivisonError = true;
                }
                let operatorResult = operate(operatorArray[i], Number(numbersArray[i]), Number(numbersArray[i + 1]));
                numbersArray.splice(i, 2, operatorResult);
                operatorArray.splice(i, 1);
            }
        }
    }
    for (let i = 0; i < operatorArray.length; i++) {
        result = operate(operatorArray[i], Number(numbersArray[i]), Number(numbersArray[i + 1]));
    }
    if (makeZeroDivisonError === false){
        resultArea.textContent = result;
    } else {
        resultArea.textContent = "ZERO DIV ERROR!";
    }
    evalString = "0";
})

const backBtn = document.querySelector('.back');

backBtn.addEventListener('click', () => {
    updateString('back');
})

const clearBtn = document.querySelector('.clear');

clearBtn.addEventListener('click', () => {
    updateString('clear')
})
