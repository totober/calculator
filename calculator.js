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


// function OPERATE //

function operate(numberA, operator, numberB) {
    
    if (operator === "+") {
       return sum(numberA, numberB)
    } else if (operator === "-") {
       return subtract(numberA, numberB)
    } else if (operator === "x"){
       return multiply(numberA, numberB) 
    } else if (operator === "%") {
       return division(numberA, numberB)
    }

}

// show numbers chosen by the user in the display "screen" //


let screen = document.querySelector(".screen-display");
let btnNumber = document.querySelectorAll(".number");
let btnOperator = document.querySelectorAll(".operator");

 
btnNumber.forEach(item => item.addEventListener("click", screenDisplayOf))
console.log(btnNumber)
btnOperator.forEach(item => item.addEventListener("click", screenDisplayOf)) 
console.log(btnOperator)



let screenDisplay = "";

function screenDisplayOf (e) {

    let valueOf = e.target.textContent;
    if(valueOf !== "clear"){
        screenDisplay += valueOf
    } else {
        screenDisplay = ""
    }
    

  screen.textContent = screenDisplay;
  
  let reg = /([0-9])+([+\-x%])([0-9])+([=+x%-])/;
    console.log(reg)


    let comp = screen.textContent.match(reg)

    
 if(reg.test(screen.textContent)){

    let numberA = Number(comp[1]);
    
    let operator = comp[2];
    
    let numberB = Number(comp[3]);

    let operator2 = comp[4];

   

        let result = operate(numberA, operator, numberB)

        if (operator2 === "=") {
            return screenDisplay = `${result}`;   
        
        } else {
           return screenDisplay = `${result}${operator2}`;
        }
     
    }


return screenDisplay

}







/* let screenDisplay = "";

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
} */



console.log(screen.textContent)






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








