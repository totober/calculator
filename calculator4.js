// basic functions //

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
        return  a / b; 
}


// function OPERATE //

function operate(numberB, operatorPrev, numberA) {

  let toNumberA = Number(numberA);
  let toNumberB = Number(numberB);
 
    if (operatorPrev === "+") {
       return sum(toNumberA, toNumberB)
    } else if (operatorPrev === "-") {
       return subtract(toNumberA, toNumberB)
    } else if (operatorPrev === "x"){
       return multiply(toNumberA, toNumberB) 
    } else if (operatorPrev === "/") {
       return division(toNumberA, toNumberB)
    }

}

// elements selectors //

let btnNumber = document.querySelectorAll(".number");
let btnOperator = document.querySelectorAll(".operator");
let screenPrev = document.querySelector(".prev-display");
let screenCurrent = document.querySelector(".current-display");
let dot = document.querySelector(".dot");
let back = document.querySelector(".back");
let clear = document.querySelector(".clear");

// elements listeners //
 
btnNumber.forEach(item => item.addEventListener("click", storenumb));
console.log(btnNumber)
btnOperator.forEach(item => item.addEventListener("click", storeop)); 
dot.addEventListener("click", storedot);
back.addEventListener("click", backSpace);
clear.addEventListener("click", clearAll);

// initialized variables //

let numberA = "";
let operator = "";
let numberB = "";
let operatorPrev = "";

// functions //

function storenumb (e) {


    screenCurrent.textContent += e.target.textContent;
    numberA = screenCurrent.textContent;
     console.log(numberA); 

     if( operator === "+" || operator === "-" || operator === "/" || operator === "x" ) {
        
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
       let resultRound = Math.round(result * 100) / 100;
        screenPrev.textContent = resultRound;
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



