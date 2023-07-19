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
let dot = document.querySelector(".dot");
let back = document.querySelector(".back");
let clear = document.querySelector(".clear");

 
btnNumber.forEach(item => item.addEventListener("click", storenumb));
console.log(btnNumber)
btnOperator.forEach(item => item.addEventListener("click", storeop)); 
dot.addEventListener("click", storedot);
back.addEventListener("click", backSpace);
clear.addEventListener("click", clearAll);


let numberA = "";
let operator = "";
let numberB = "";
let operatorPrev = "";
//let result = operate(numberA, operatorPrev, numberB)


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
    operator = e.target.textContent 
    console.log(operator)

  

 
    if(numberA && numberB && operatorPrev){

        if(operatorPrev === "/" && numberA === "0") {
            alert("You cant divide by 0!");
            operatorPrev = "";
        }
      
       let result = operate(numberA, operatorPrev, numberB)
        console.log(result) 
        screenPrev.textContent = result
    } 

}

function storedot (e) {
    if(!screenCurrent.textContent.includes(".")){
        screenCurrent.textContent += "."
    }
}

function clearAll(e){
    screenCurrent.textContent = "";
    screenPrev.textContent = "";
    numberA = "";
    numberB = "";
    operator = "";
    operatorPrev = "";
}

function backSpace (e) {
    let backArr = screenCurrent.textContent.split("");
    let backPop = backArr.pop();
    let backString = backArr.join("");

    numberA = backString;
    screenCurrent.textContent = backString;
}



