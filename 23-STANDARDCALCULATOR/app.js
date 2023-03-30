// Define the operators as an object with keys and values
const operators = {
  plus: '+',
  minus: '-',
  multiply: '*',
  divide: '/',
  percent: '%',
};

// Define the calculator state
const calculator = {
  resultValue: '0',
  firstOperand: null,
  secondOperand: false,
  operator: null,
};

// Handle input of digits
function inputDigit(digit) {
  const { resultValue, secondOperand } = calculator;

  if (secondOperand === true) {
    calculator.resultValue = digit;
    calculator.secondOperand = false;
  } else {
    calculator.resultValue = resultValue === '0' ? digit : resultValue + digit;
  }
}

// Handle input of decimal point
function inputDecimal(dot) {
  if (calculator.secondOperand === true) {
    calculator.resultValue = '0';
    calculator.secondOperand = false;
    return;
  }
  if (!calculator.resultValue.includes(dot)) {
    calculator.resultValue += dot;
  }
}

// Handle operator input
function handleOperator(nextOperator) {
  const { firstOperand, resultValue, operator } = calculator;
  const inputValue = parseFloat(resultValue);

  if (operator && calculator.secondOperand) {
    calculator.operator = nextOperator;
    return;
  }

  if (firstOperand == null && !isNaN(inputValue)) {
    calculator.firstOperand = inputValue;
  } else if (operator) {
    const currentValue = firstOperand || 0;
    const result = calculate(currentValue, inputValue, operator);

    calculator.resultValue = String(result);
    calculator.firstOperand = result;
  }
  calculator.secondOperand = true;
  calculator.operator = nextOperator;
}

// Handle clear button
function handleClear() {
  calculator.firstOperand = null;
  calculator.secondOperand = false;
  calculator.operator = null;
  calculator.resultValue = '0';
}

// Handle backspace button
function handleBackspace() {
  let input = calculator.resultValue;
  input = input.slice(0, -1);
  if (input === '') {
    input = '0';
  }
  calculator.resultValue = input;
}

// Calculate the result of an operation
function calculate(firstOperand, secondOperand, operator) {
    switch (operator) {
      case operators.plus:
        return firstOperand + secondOperand;
      case operators.minus:
        return firstOperand - secondOperand;
      case operators.multiply:
        return firstOperand * secondOperand;
      case operators.divide:
        return firstOperand / secondOperand;
      case operators.percent:
        return (firstOperand / 100) * secondOperand;
      default:
        return secondOperand;
    }
  }

// Reset the calculator to its initial state
function resetCalculator() {
  calculator.resultValue = '0';
  calculator.firstOperand = null;
  calculator.secondOperand = false;
  calculator.operator = null;
}

// Update the display with the current result value
function updateDisplay() {
  const result = document.querySelector('.result');
  result.value = calculator.resultValue;
}
// Initialize the calculator display and button event listeners
updateDisplay();

const keyBtns = document.querySelectorAll('.numbers_operands button');
keyBtns.forEach((keyBtn) => {
  keyBtn.addEventListener('click', (e) => {
    const target = e.target;
    if (!target.matches('button')) {
      return;
    }

    if (target.classList.contains('operator')) {
        handleOperator(target.value);
      } else if (target.classList.contains('decimal')) {
        inputDecimal(target.value);
      } else if (target.classList.contains('percent-btn')) {
        handleOperator(target.value);
      } else if (target.classList.contains('clear')) {
        handleClear();
      } else if (target.classList.contains('backspace')) {
        handleBackspace();
      } else {
        inputDigit(target.value);
      }
      updateDisplay();
  });
});
