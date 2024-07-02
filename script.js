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

function operate(operator, firstNum, secondNum) {
  if (operator == "+"){
    add(firstNum,secondNum);
  }
  else if (operator == "-"){
    subtract(firstNum,secondNum);
  }
  else if (operator == "*"){
    multiply(firstNum,secondNum);
  }
  else if (operator == "/"){
    divide(firstNum,secondNum);
  }
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
      // operate()
      setHaveOperator(true);
      console.log(button.value);
      // operator = button.value;
      setOperator(button.value);
      // document.getElementById('screen-container').innerHTML = ""
    }
    if (button.className == "numbers"){
    
      if(!haveOperator){
        document.getElementById('screen-container').innerHTML += button.value;
        currentNumber = parseInt(document.getElementById('screen-container').innerHTML);
        // firstNumber = currentNumber;
        setFirstNumber(currentNumber);
      }
      else{
        document.getElementById('screen-container').innerHTML = ""
        document.getElementById('screen-container').innerHTML += button.value;
        currentNumber = parseInt(document.getElementById('screen-container').innerHTML);
        // secondNumber = currentNumber;
        setSecondNumber(currentNumber);
        
        
      }
      
    }
    if (button.value == "="){
      // operate(operator, );
      setHaveOperator(false);
      console.log(getFirstNumber());
      console.log(getSecondNumber());
      console.log(getOperator());
      document.getElementById('screen-container').innerHTML = ""
    }


    // document.getElementById('screen-container').innerHTML += button.value;
  })
});