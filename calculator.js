// functions for the calculator //

function sum (a, b) {
    return a + b;
}

function subtract (a, b) {
    return a - b;
}

function multiply (a, b) {
    return a * b;
}

function division (a, b) {
    return a / b;
}

// variables to keep the 3 parts of the calculation operation //

let numberA;

let operator;

let numbreB;

// function OPERATE //

function operate(numberA, operator, numbreB) {
    
    if (operator === "+") {
        sum(numberA, numbreB)
    } else if (operator === "-") {
        subtract(numberA, numbreB)
    } else if (operator === "x"){
        multiply(numberA, numbreB) 
    } else if (operator === "%") {
        division(numberA, numbreB)
    }

}