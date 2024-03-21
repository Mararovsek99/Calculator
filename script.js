const add = function(a, b) {
    return a+b;
    };

const subtract = function(a, b) {
    return a-b;
    };

const multiply = function(a, b) {
    return a*b;
    }

const divide = function(a, b) {
    return a/b;
     }   

     
let firstNum;
let secondNum;
let operator;
let stringOperator;


const operate = function(a,b){
    if (stringOperator === "+"){
       return add(a, b);
    }
    else if (stringOperator === "-"){
        return subtract(a, b);
    }
    else if (stringOperator === "*"){
        return multiply(a, b);
    }
    else if (stringOperator === "/"){
        if(b !== 0){
            return divide(a, b);
        }
        else{
            return "cannot divide by zero!"
        }
        
    }
}



/*making clock on phone and indetval every second to update*/
let displayTime = document.getElementById("displayTime");
function timer(){
    displayTime.textContent = (new Date().getHours().toString().padStart(2, '0') 
    + ":" + new Date().getMinutes().toString().padStart(2,"0"));
}
timer();
setInterval(timer, 1000);




let displayValueP = document.getElementById("displayValue");
const buttonsContainer = document.querySelector(".buttons");

buttonsContainer.addEventListener("click", function(event){
    if(event.target.classList.contains("orangeButton") && (displayValueP.textContent !== "")){
        operator = event.target.textContent;
        operatorPressed();
        if(operator !== "="){
            displayValueP.textContent = "";
        }
        valueSize(displayValueP);
        valueSize(upperValue);
    }
     else if(event.target.classList.contains("lightgreyButton")){
        operator = event.target.textContent;
        if(operator === "AC"){/*------------------------------------------------------uporaba tipke AC */
            displayValueP.textContent = "";
            upperValue.textContent = "";
            operator = "";
            }
        else if(operator === "±" &&  !(displayValueP.textContent === "")){/*-------------------------------------------spremeni predznak */

        valueSize(displayValueP);
        valueSize(upperValue);

        }
        else if(operator === "%" && !(displayValueP.textContent === "")){/*-----------------------------------------------------------procenti */
        displayValueP.textContent = (displayValueP.textContent / 100);
        valueSize(displayValueP);
        valueSize(upperValue);
        }
        
    }
    else if(event.target.textContent.includes(".") && displayValueP.textContent.includes(".")){ /*checks if the dot is already included */

        return ;
    }
    else if (event.target.classList.contains("greyButton") && displayValueP.textContent.length < 14){/*adds number,but max 9 caracters */
        displayValueP.textContent += event.target.textContent;
        valueSize(displayValueP);
        valueSize(upperValue);
    }
})



displayValueP.addEventListener("click", function(){
    displayValueP.textContent = displayValueP.textContent.slice(0,-1); /*you can delete last caracter of display Value, by clicking on it */
})



const numberLenght = document.getElementById("displayValue")
function valueSize(value){ /*if its too many characters, it must change the size of it */
    if(value.textContent.toString().length > 14){
        value.style.fontSize = "30px";
    }
    else if(value.textContent.toString().length > 11){
        value.style.fontSize = "40px";
    }
    else if(value.textContent.toString().length > 9){
        value.style.fontSize = "50px";
    }
    else if(value.textContent.toString().length > 7){
        value.style.fontSize = "60px";
    }
    else{
        value.style.fontSize = "80px";
    }
}

const upperValue = document.getElementById("secondValue");
function operatorPressed(){
    if (operator === "=") {

        stringOperator = upperValue.textContent.charAt(upperValue.textContent.length -1);
        if (stringOperator === "×") {
            stringOperator = "*";
        }
        else if (stringOperator === "÷"){
            stringOperator = "/";
        }
        firstNum = upperValue.textContent.slice(0,-1);
        secondNum = displayValueP.textContent;
        
        displayValueP.textContent = operate(parseFloat(firstNum),parseFloat(secondNum));
        upperValue.textContent = "";
        return;
    }
    else if (upperValue.textContent === "") {
        upperValue.textContent = displayValueP.textContent + (" " + operator);
    }
    else{

        stringOperator = upperValue.textContent.charAt(upperValue.textContent.length -1);
        if (stringOperator === "×") {
            stringOperator = "*";
        }
        else if (stringOperator === "÷"){
            stringOperator = "/";
        }
        firstNum = upperValue.textContent.slice(0,-1);
        secondNum = displayValueP.textContent;

        upperValue.textContent = operate(parseFloat(firstNum),parseFloat(secondNum));
        upperValue.textContent += (" " + operator);
        valueSize(displayValueP);
        valueSize(upperValue);

    }
  
}
