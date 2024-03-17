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

    if(event.target.classList.contains("greyButton") && displayValueP.textContent.length < 9){
        displayValueP.textContent += event.target.textContent;
    }
})


 