// Select the DOM Elements
const wordToCheck = document.querySelector('.text_check');
const checkBtn = document.querySelector('.check_btn');
const resultPara = document.querySelector('.result_text');

// Add event listener
checkBtn.addEventListener('click', countVowel);

// Define event listener function
function countVowel() {
  const strToCheck = wordToCheck.value;
  let vowelCount = 0;

  for (i = 0; i < strToCheck.length; i++) {
    let letter = strToCheck[i];
    const regex = /[aeiouAEIOU]/g;
    // const regex = /[B-DF-HJ-NP-TV-Zb-df-hj-np-tv-z]/g   ; // consonant
    if (letter.match(regex)) {
      vowelCount++;
    }
  }

  vowelWord = vowelCount > 1 ? 'vowels' : 'vowel';
  resultPara.textContent =
    strToCheck === ''
      ? ''
      : (resultPara.textContent = `${strToCheck} has ${vowelCount} ${vowelWord}.`);
}

