let currentInput = '';
let operator = '';
let previousInput = '';

function appendNumber(number) {
  currentInput += number;
  updateDisplay(currentInput);
}

function appendOperator(op) {
  if (currentInput === '') return;
  operator = op;
  previousInput = currentInput;
  currentInput = '';
}

function clearDisplay() {
  currentInput = '';
  previousInput = '';
  operator = '';
  updateDisplay(0);
}

function calculate() {
  let result;
  const previous = parseFloat(previousInput);
  const current = parseFloat(currentInput);

  if (isNaN(previous) || isNaN(current)) return;

  switch (operator) {
    case '+':
      result = previous + current;
      break;
    case '-':
      result = previous - current;
      break;
    case '*':
      result = previous * current;
      break;
    case '/':
      result = current === 0 ? 'Erreur' : previous / current;
      break;
    default:
      return;
  }

  currentInput = result;
  operator = '';
  previousInput = '';
  updateDisplay(currentInput);
}

function updateDisplay(value) {
  const display = document.getElementById('display');
  display.innerText = value;
}
