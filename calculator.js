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


let screen = document.querySelector(".screen-display");
let btnNumber = document.querySelectorAll(".number");
let btnOperator = document.querySelectorAll(".operator");

 
btnNumber.forEach(item => item.addEventListener("click", numberDisplay))
console.log(btnNumber)
btnOperator.forEach(item => item.addEventListener("click", operatorDisplay)) 
console.log(btnOperator)


let screenDisplay = "";

 function numberDisplay (e) {
   
    
   let numberValue = Number(e.target.textContent);
   console.log(numberValue)
   console.log(typeof numberValue)


   screenDisplay += numberValue


   return screen.textContent = screenDisplay
} 


function operatorDisplay(e) {


       let operatorValue = e.target.textContent
    console.log(operatorValue)
    console.log(typeof operatorValue)

    screenDisplay += operatorValue

    return screen.textContent = screenDisplay;
}

let reg = /([0-9]+)([+\-x%])([0-9]+)(=)?/;
console.log(reg)

console.log(screen.textContent)

function compare(){

let comp = screen.textContent.match(reg)
console.log(comp)

}




/* function validate(){

RegExp.test(screenDisplay.value)

} */


//let arrValue = Array.from(screenValue)
//console.log(arrValue)




/*  if (typeof screenValue.value === "number" && "string") {

    screenValue = numberValue;

    numberA = screenValue
    console.log(numberA)

} else if (typeof screenValue === )  */




