//displayed value
let displayDiv = document.querySelector('#display');

//set initial values
let val1 = [];
let operatorChoice;
let val2 = [];
let result;

//Add event listeners to numbers
const buttons = document.querySelectorAll('#number');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        //if there is no operator chosen set first val
        if (operatorChoice == undefined) {
            val1.push(button.textContent);
            display(val1.join(''));
        }
        //if operator is set then
        else {
            //if operator is set and first val empty,
            //make first value the previous result
            if (val1.length == 0) {
                val1[0] = result;
            }
            //apply to second value
            val2.push(button.textContent);
            display(val2.join(''))
        }
    })
})

//operator buttons add event listeners
const opButtons = document.querySelectorAll('#operator');
opButtons.forEach((opButton) => {
    opButton.addEventListener('click', () => {
        opString = opButton.textContent;

        //if there is an operator chosen, and there is a second value
        //then return the results
        if (operator && val2.length !== 0) {
            resultFunction();
        }

        switch (opString) {
            case '-': operatorChoice = '-'
                break;
            case '+': operatorChoice = '+'
                break;
            case 'x': operatorChoice = '*'
                break;
            case '/': operatorChoice = '/'
                break;
        }
    })
})

//clear button 
const clearBtn = document.querySelector('#clear');
clearBtn.addEventListener('click', () => {
    displayDiv.textContent = ' ';
    val1 = [];
    val2 = [];
    operatorChoice = undefined;
})

//equals button
const equalBtn = document.querySelector('#equalButton');
equalBtn.addEventListener('click', resultFunction);

//results function
function resultFunction() {
    result = operate(operatorChoice, val1, val2);
    roundedResult = Math.round(result * 100) / 100;
    display(roundedResult);

    //reset values
    val1 = [];
    operatorChoice = undefined;
    val2 = [];
}

//math operations
function add(a, b) {
    return Number(a) + Number(b);
}

function subtract(a, b) {
    return Number(a) - Number(b);
}

function multiply(a, b) {
    return Number(a) * Number(b);
}

function divide(a, b) {
    return Number(a) / Number(b);
}

//call math functions
function operate(operator, c, d) {
    a = c.join('');
    b = d.join('');
    if (operator === '-') {
        return subtract(a, b)
    }
    if (operator === '+') {
        return add(a, b)
    }
    if (operator === '*') {
        return multiply(a, b)
    }
    if (operator === '/') {
        return divide(a, b)
    }
}

//function to popular display
function display(numberDisplay) {
    if (numberDisplay == 'Infinity' || numberDisplay == '-Infinity') {
        numberDisplay = 'Bro what are you doing';
    }
    displayDiv.textContent = numberDisplay;
}