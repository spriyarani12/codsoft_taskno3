let currentInput = '';
let operator = null;
let previousValue = '';

function appendValue(value) {
  currentInput += value;
  updateDisplay(currentInput);
}

function performOperation(op) {
  if (currentInput === '') return;
  operator = op;
  previousValue = currentInput;
  currentInput = '';
}

function calculateResult() {
  if (previousValue === '' || currentInput === '' || operator === null) return;
  const num1 = parseFloat(previousValue);
  const num2 = parseFloat(currentInput);
  let result = 0;

  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
  }

  updateDisplay(result);
  resetCalculator();
}

function clearDisplay() {
  currentInput = '';
  updateDisplay('0');
}

function updateDisplay(value) {
  document.getElementById('display').textContent = value;
}

function resetCalculator() {
  currentInput = '';
  operator = null;
  previousValue = '';
}
