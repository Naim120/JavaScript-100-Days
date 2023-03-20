import { quotesData } from './quotes.js';

const textQuote = document.querySelector('.quote-text');
const authorQuote = document.querySelector('.quote-author');
const quoteBtn = document.getElementById('get-quote-btn');

function getRandomQuote() {
  // Select a random quote from the array
  const randomIndex = Math.floor(Math.random() * quotesData.length);
  const randomQuote = quotesData[randomIndex];
  return randomQuote;
}

// Add event listener to call quotation
quoteBtn.addEventListener('click', () => {
  // Update UI
  const quotation = getRandomQuote();
  textQuote.textContent = `"${quotation.text}"`;
  authorQuote.textContent = `-${quotation.author}-`;
});
