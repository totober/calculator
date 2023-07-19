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

function operate(numberB, operator, numberA) {
    
    if (operator === "+") {
       return sum(numberA, numberB)
    } else if (operator === "-") {
       return subtract(numberA, numberB)
    } else if (operator === "x"){
       return multiply(numberA, numberB) 
    } else if (operator === "/") {
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

 
btnNumber.forEach(item => item.addEventListener("click", storeValues))
console.log(btnNumber)
btnOperator.forEach(item => item.addEventListener("click", storeValues)) 
console.log(btnOperator)



//let screenDisplay = "";

//screenC = "";
//screenPrev = "";

let operator = "";
let numberA = 0; 
let numberB = 0;

let previousKey = btnContainer.dataset.prevKey;


function storeValues(e) {

  

    if(e.target.textContent === "clear") {

    screenPrev.textContent = "";
    screenCurrent.textContent = "";
    operator = "";
    numberA = 0; 
    numberB = 0;

   }

    if (e.target.className === "number"){

        btnContainer.dataset.prevKey = "number";


            screenCurrent.textContent += e.target.textContent;
           numberA = screenCurrent.textContent;
            console.log(numberA); 
           // btnContainer.dataset.first = screenCurrent.textContent;



   
    } 


    if (e.target.textContent === "+" || 
        e.target.textContent === "-" || 
        e.target.textContent === "x" || 
        e.target.textContent === "/"){
        
                
        console.log(numberB) 


        btnContainer.dataset.prevKey = "operator";   
      
 
        screenPrev.textContent = screenCurrent.textContent;
 
        screenCurrent.textContent = "";

        numberB = screenPrev.textContent;
    
  
      
         
         operator = e.target.textContent  
        console.log(operator)
       
       console.log(numberA)  
       
       let result = operate(numberA, operator, numberB)
       console.log(result)     


 /*       if(previousKey === "operator" && numberA) {
        let result = operate(numberA, operator, numberB)
    console.log(result) 
       }  */

  

    }
           
    let values = [numberA, operator, numberB]
    console.log(values)
    
    // screenCurrent.textContent = result
     //screenPrev.textContent = "";

     if ((e.target.textContent === "=")){

        let result = operate(numberA, operator, numberB)
        console.log(result) 
         screenCurrent.textContent = result
         screenPrev.textContent = "";
    }


 
    
}






/* if( values[0] === typeof "number"){
    let result = operate(numberA, operator, numberB)
    console.log(result) 
   return screen.textContent = result

}   */






/* let regnumb = /([0-9]+)/

if (e.target.className === "number" && (e.target.textContent === "+" || "-" || "x" || "%") && e.target.className === "number"){
    screenDisplay = ""
    numberB = e.target.textContent
    console.log(numberB)
} else if (regnumb.test(e.target.textContent) ) {   //&& e.target.textContent === "+" || "-" || "x" || "%"
        numberA = screen.textContent
        console.log(numberA)
    }

} */




























/* let screenDisplay = "";

function numberDisplay(e){

   let value = e.target.textContent;
   console.log(value)

    screenDisplay += value;

    screen.textContent = screenDisplay;

return value
    
}




function operatorDisplay(e){

   let value = e.target.textContent
   console.log(value)

return value

} */







/* function screenDisplayOf (e) {

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

} */







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




/* function validate(){

RegExp.test(screenDisplay.value)




//let arrValue = Array.from(screenValue)
//console.log(arrValue)} */
