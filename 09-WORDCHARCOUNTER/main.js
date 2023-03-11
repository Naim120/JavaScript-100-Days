// Define DOM Elements
const inputArea = document.getElementById('input-area');
const wordCount = document.querySelector('.word-count');
const charCount = document.querySelector('.char-count');

// Add event listener (keyup) to count characters
inputArea.addEventListener('keyup', () => {
  charCount.textContent = inputArea.value.length;
});

// Add event listener (input) to count words
inputArea.addEventListener('input', getWordCount);

// Define function to count words
function getWordCount() {
  if (inputArea.value === '') {
    wordCount.textContent = 0;
  } else {
    totalWords = inputArea.value.match(/\w+/g).length;
    wordCount.textContent = totalWords;
  }
}
