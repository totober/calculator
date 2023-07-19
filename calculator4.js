// functions for the calculator //

function sum (a, b) {
    return Number(a) + Number(b);
}

function subtract (a, b) {
    return Number(a) - Number(b);
}

function multiply (a, b) {
    return Number(a) * Number(b);
}

function division (a, b) {
        let divix =  Number(a) / Number(b);

    return Math.round(divix * 10) / 10;
    
}

// variables to keep the 3 parts of the calculation operation //


// function OPERATE //

function operate(numberB, operatorPrev, numberA) {
    
    if (operatorPrev === "+") {
       return sum(numberA, numberB)
    } else if (operatorPrev === "-") {
       return subtract(numberA, numberB)
    } else if (operatorPrev === "x"){
       return multiply(numberA, numberB) 
    } else if (operatorPrev === "/") {
       return division(numberA, numberB)
    }

}

// show numbers chosen by the user in the display "screen" //


let screen = document.querySelector(".screen-display");
let btnContainer = document.querySelector(".button-container")
let btnNumber = document.querySelectorAll(".number");
let btnOperator = document.querySelectorAll(".operator");
let screenPrev = document.querySelector(".prev-display");
let screenCurrent = document.querySelector(".current-display");
//let btnClear = document.querySelector("")

 
btnNumber.forEach(item => item.addEventListener("click", storenumb))
console.log(btnNumber)
btnOperator.forEach(item => item.addEventListener("click", storeop)) 
console.log(btnOperator)

let numberA = "";
let operator = "";
let numberB = "";
let operatorPrev = "";
let result = operate(numberA, operatorPrev, numberB)


function storenumb (e) {

    screenCurrent.textContent += e.target.textContent;
    numberA = screenCurrent.textContent;
     console.log(numberA); 

     if( operator === "+" || operator === "-" ||operator === "/" ||operator === "x" ) {
        
        numberB = screenPrev.textContent;
        operatorPrev = operator;
        console.log(operatorPrev)
        console.log(numberB)

      
     }



}

function storeop (e) {
    screenPrev.textContent = screenCurrent.textContent
    screenCurrent.textContent = "";
    //screenCurrent.textContent = "";
    operator = e.target.textContent 
    console.log(operator)

  

 
    if(numberA && numberB && operatorPrev){

        if(operatorPrev === "/" && numberA === "0") {
            alert("You cant divide by 0!");
            operatorPrev = "";
        }

        
      
        result = operate(numberA, operatorPrev, numberB)
        console.log(result) 
        screenPrev.textContent = result
    } 

    if(e.target.textContent === "clear"){
        operatorPrev = "";
        screenPrev.textContent = "";
    }

}

