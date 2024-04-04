let fullOperation = '';
let result = '';
let prevCalculation = [];

function pressButton(number) {
  fullOperation = fullOperation + number;
  showNumber();
}

function pressOperation(op) {
  //console.log(op);
  let [operando1, operador, operando2] = fullOperation.toString().split(/(\+|-|\x|\/)/);
  if (operador) return;
  fullOperation = fullOperation + op;
  showNumber();
}

function calculateResult() {
  const values = fullOperation.split(/(\+|-|\x|\/)/);

  //console.log(values);
  let [number1, operador, number2] = fullOperation.split(/(\+|-|\x|\/|\^)/);

  //console.log(number1);
  //console.log(number2);
  //console.log(operador);

  number1 = parseFloat(number1);
  number2 = parseFloat(number2);

  switch (operador) {
    case 'x':
      fullOperation = multiplication(number1, number2);
      break;
    case '+':
      fullOperation = addition(number1, number2);
      break;
    case '-':
      fullOperation = subtraction(number1, number2);
      break;
    case '/':
      fullOperation = division(number1, number2);
      break;
    case '^':
      fullOperation = power(number1, number2);
      break;
    default:
      break;
  }

  prevCalculation.push(fullOperation);

  showNumber();
}

function clearScreen() {
  fullOperation = '';
  showNumber();
}

function multiplication(number1, number2) {
  return number1 * number2;
}

function addition(number1,number2){
  return number1 + number2;
}

function subtraction(number1,number2){
  return number1 - number2;
}

function division(number1,number2){
  return number1 / number2;
}

function power(number1,number2){
  return Math.pow(number1,number2);
}

function showNumber() {
  document.getElementById('operand1Display').innerHTML = fullOperation;
}

function prevResults(){
  const container = document.getElementById('operand1Display');
  container.innerHTML = prevCalculation.join(', ');
}

showNumber();