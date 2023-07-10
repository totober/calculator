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

// show numbers chosen by the user in the display "screen" //

let btnContainer = document.querySelector(".button-container");
let screen = document.querySelector(".screen-display");
/* 
btnNumber.addEventListener("click", (e) => screen.textContent = e.target.textContent);
btnOperator.addEventListener("click", (e) => screen.textContent = e.target.textContent); */

btnContainer.addEventListener("click", screenDisplay);

let screenValue = "";

 function screenDisplay (e) {

    if (btnContainer.children)  {

        let btnValue = e.target.textContent;
        console.log(btnValue);
        screenValue += btnValue;
        screen.textContent = screenValue;
    }



/* let operatorValue = e.target.textContent;
console.log(operatorValue); */





} 

