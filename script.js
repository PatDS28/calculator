function add(first,second){
  return first + second;
};
function subtract(first, second){
  return first - second;
}
function multiply(first,second) {
  return first * second;
}
function divide(first,second){
  if(first == 0 || second == 0){
    return "error";
  }
  else{
    return first/second;
  }
}

var firstNumber = 0;
var secondNumber = 0;
var operator = null;
var haveOperator = false;
var displayedResult = false;

function getFirstNumber(){
  return firstNumber;
}
function setFirstNumber(num){
  firstNumber = num;
}
function getSecondNumber(){
  return secondNumber;
}
function setSecondNumber(num){
  secondNumber = num;
}
function getOperator(){
  return operator;
}
function setOperator(opr){
  operator = opr;
}
function getHaveOperator(){
  return haveOperator;
}
function setHaveOperator(haveOpr){
  haveOperator = haveOpr;
}
function getDisplayedResult(){
  return displayedResult;
}
function setDisplayedResult(value){
  displayedResult = value;
}

function operate(operator, firstNum, secondNum) {
  if (operator == "+"){
    return add(firstNum,secondNum);
  }
  else if (operator == "-"){
    return subtract(firstNum,secondNum);
  }
  else if (operator == "*"){
    return multiply(firstNum,secondNum);
  }
  else if (operator == "/"){
    return divide(firstNum,secondNum);
  }
}

function ChangeScreenAppend(value){
  if(getDisplayedResult()){
    clearScreen();
    setDisplayedResult(false);
  }
  document.getElementById('screen-container').insertAdjacentText('beforeend', value);
}

function clearScreen(){
  document.getElementById('screen-container').textContent = ''; 
}
function displayErrorMessage(){
  document.getElementById('screen-container').textContent = 'Error'; 
}

const buttons = document.querySelectorAll("button");

console.log(buttons)
buttons.forEach((button)=>{
  button.addEventListener("click", function(){
    if (button.value == "clear"){
      console.log(button.value);
      document.getElementById('screen-container').innerHTML = "";
      setFirstNumber(0);
      setSecondNumber(0);
      setOperator(null);
      setHaveOperator(false);
    }
    if (button.className == "operators"){
      setHaveOperator(true);
      setOperator(button.value);
      clearScreen();
    
    }
    if (button.className == "numbers"){
      

      if(!getHaveOperator()){
        ChangeScreenAppend(button.value);  
        currentNumber = parseFloat(document.getElementById('screen-container').innerHTML);
        
        setFirstNumber(currentNumber);
      }
      else{
        // clearScreen();

        // changeScreenAll(getFirstNumber());
        ChangeScreenAppend(button.value);
        currentNumber = parseFloat(document.getElementById('screen-container').innerHTML);
        setSecondNumber(currentNumber);
      }
      
    }
    if (button.value == "="){
      // operate(operator, );
      if(!(getOperator() == null)){
        const result = operate(getOperator(), getFirstNumber(), getSecondNumber());
        setHaveOperator(false);
        console.log("variables---");
        console.log(getFirstNumber());
        console.log(getSecondNumber());
        console.log(getOperator());
        console.log(result);
        document.getElementById('screen-container').innerHTML = result;
        setDisplayedResult(true);
        setHaveOperator(false);
        setOperator(null);
        setFirstNumber(result);
        setSecondNumber(0);
      }
      // else{
      //   displayErrorMessage();
      // }

    }
    if (button.value == "."){
      ChangeScreenAppend(".");
    }
  })
});