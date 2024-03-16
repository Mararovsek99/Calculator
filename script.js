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
 