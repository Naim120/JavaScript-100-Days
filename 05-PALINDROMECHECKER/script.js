// Select the DOM Elements
const wordToCheck = document.querySelector('.text_check');
const checkBtn = document.querySelector('.check_btn');
const resultPara = document.querySelector('.result_text');

// Add event listener
checkBtn.addEventListener('click', palindrome);

// Define event listener function
function palindrome() {
  const strToCheck = wordToCheck.value;
  const checkSpecial = strToCheck.replace(/[^A-Za-z0-9]/g, '');
  const checkPalindrome = checkSpecial.split('').reverse().join('');
  const paraText = 'a Palindrome.';

  resultPara.textContent =
    checkSpecial === checkPalindrome
      ? `${strToCheck} is ${paraText} `
      : `${strToCheck} is NOT ${paraText}`;
}
