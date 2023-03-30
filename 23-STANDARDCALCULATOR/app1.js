const clearBtn = document.querySelector('.clear-btn');
const bsBtn = document.querySelector('.bs-btn');
const plusBtn = document.querySelector('.plus-btn');
const minusBtn = document.querySelector('.minus-btn');
const timesBtn = document.querySelector('.times-btn');
const divideBtn = document.querySelector('.divide-btn');
const percentBtn = document.querySelector('.percent-btn');
const equalsBtn = document.querySelector('.equals-btn');

const result = document.querySelector('.result');
let input = '0'; // start with 0 as the initial input
let decimal = false; // track if decimal point has been entered

// add event listener to all buttons
const btns = Array.from(document.querySelectorAll('.numbers_operands button'));
btns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const value = btn.value;
    if (value === '.') {
      // check if decimal has already been entered
      if (!decimal) {
        // add decimal to input and update decimal flag
        decimal = true;
        input += '.';
      }
    } else if (value === 'clear') {
      // clear input and reset decimal flag
      input = '0';
      decimal = false;
    } else if (value === 'bs') {
      // remove last character from input and update decimal flag if necessary
      if (input.length > 1 && input.slice(-1) === '.') {
        decimal = false;
      }
      input = input.slice(0, -1);
    } else if (
      value === '+' ||
      value === '-' ||
      value === '*' ||
      value === '/'
    ) {
      // perform arithmetic operation on current input and display result
      const prevInput = parseFloat(input);
      input = '0';
      decimal = false;
      switch (value) {
        case '+':
          if (!isNaN(parseFloat(result.value))) {
            input = prevInput + parseFloat(result.value);
          }
          break;
        case '-':
          if (!isNaN(parseFloat(result.value))) {
            input = prevInput - parseFloat(result.value);
          }
          break;
        case '*':
          if (!isNaN(parseFloat(result.value))) {
            input = prevInput * parseFloat(result.value);
          }
          break;
        case '/':
          if (!isNaN(parseFloat(result.value))) {
            input = prevInput / parseFloat(result.value);
          }
          break;
      }
      // update display
      result.value = input;
    } else {
      // add digit to input
      if (input === '0') {
        // if input is zero, replace with digit
        input = value;
      } else {
        // otherwise, append digit to input
        input += value;
      }
    }
    // update display
    result.value = input;
  });
});
