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


const operate = function(a,b){
    if (operator === "+"){
       return add(a, b);
    }
    else if (operator === "-"){
        return subtract(a, b);
    }
    else if (operator === "*"){
        return multiply(a, b);
    }
    else if (operator === "/"){
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
    if(event.target.classList.contains("orangeButton")){
        operator = event.target.textContent;
        operatorPressed();
        displayValueP.textContent = "";
    }
    else if(event.target.textContent.includes(".") && displayValueP.textContent.includes(".")){ /*checks if the dot is already included */
        return ;
    }
    else if (event.target.classList.contains("greyButton") && displayValueP.textContent.length < 9){/*adds number,but max 9 caracters */
        displayValueP.textContent += event.target.textContent;
        valueSize();
    }
})



displayValueP.addEventListener("click", function(){
    displayValueP.textContent = displayValueP.textContent.slice(0,-1); /*you can delete last caracter of display Value, by clicking on it */
})



const numberLenght = document.getElementById("displayValue")
function valueSize(){ /*if its too many characters, it must change the size of it */
    if(numberLenght.textContent.toString().length > 7){
        numberLenght.style.fontSize = "60px";
    }
    else{
        numberLenght.style.fontSize = "80px";
    }
}

const upperValue = document.getElementById("secondValue");
function operatorPressed(){
    if (operator === "=") {
        displayValueP.textContent = eval(`${upperValue.textContent.slice(0,-1)} + ${displayValueP.textContent}`).toString();
        upperValue.textContent = "";
        return;
    }
    else if (upperValue.textContent === "") {
        upperValue.textContent = displayValueP.textContent + operator;
    }
    else{

        operator = upperValue.textContent.charAt(upperValue.textContent.length -1);
        if (operator.toLowerCase === "x") {
            operator === "*";
        }
        else if (operator === "÷"){
            operator === "/";
        }
        console.log(operator);
        firstNum = upperValue.textContent.slice(0,-1);
        console.log(firstNum);
        secondNum = displayValueP.textContent;
        console.log(secondNum);
        upperValue.textContent = operate(parseInt(firstNum),parseInt(secondNum));
        upperValue.textContent += operator;

    }
  
}
