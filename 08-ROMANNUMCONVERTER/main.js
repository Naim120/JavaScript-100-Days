// DOM Elements
const number = document.querySelector('.integer');
const convertBtn = document.querySelector('.convert-btn');
const convertText = document.querySelector('.conversion-text');

// Create an Object for Numbers & Numerals
let intAndArabic = [
  { intNum: 1000, roman: 'M' },
  { intNum: 900, roman: 'CM' },
  { intNum: 500, roman: 'D' },
  { intNum: 400, roman: 'CD' },
  { intNum: 100, roman: 'C' },
  { intNum: 90, roman: 'XC' },
  { intNum: 50, roman: 'L' },
  { intNum: 40, roman: 'XL' },
  { intNum: 10, roman: 'X' },
  { intNum: 9, roman: 'IX' },
  { intNum: 5, roman: 'V' },
  { intNum: 4, roman: 'IV' },
  { intNum: 1, roman: 'I' },
];
// Add event listener to the button
convertBtn.addEventListener('click', convertToRoman);

// Define function for conversion

function convertToRoman() {
  numValue = number.value;
  let romanNumerals = '';
  for (let i = 0; i < intAndArabic.length; i++) {
    if (intAndArabic[i].intNum <= numValue) {
      numValue = numValue - intAndArabic[i].intNum;
      romanNumerals = romanNumerals + intAndArabic[i].roman;
      i--;
    }
  }

  convertText.textContent =
    number.value === '' || number.value === '0'
      ? ''
      : `${number.value} is ${romanNumerals} in Roman Numerals`;
}
