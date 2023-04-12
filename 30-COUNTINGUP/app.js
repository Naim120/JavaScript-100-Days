const counters = document.querySelectorAll('.counter');
const container = document.querySelector('.container');
const mainContainer = document.querySelector('#main');

// Function to update counter
function updateCounter(counter) {
  const target = parseInt(counter.dataset.target);
  const count = parseInt(counter.textContent);
  const increment = target / 400; // incremently add;

  if (count < target) {
    counter.textContent = `${Math.ceil(count + increment)}`;
    setTimeout(() => updateCounter(counter), 10);
  } else {
    counter.textContent = target;
  }
}

// Function to reset counter
function resetCounter(counter) {
  counter.textContent = 0;
}

// Function to handle continue button click event
function handleContinueButtonClick(counter) {
  container.scrollTop = container.scrollHeight;
  setTimeout(() => updateCounter(counter), 10);
}

// Function to handle container scroll event
function handleContainerScroll(counter) {
  const scrollHeight = container.scrollTop;
  const sectionTop = document.getElementById('top');
  const sectionTopHeight = sectionTop.clientHeight;

  if (scrollHeight >= sectionTopHeight) {
    setTimeout(() => updateCounter(counter));
  } else {
    resetCounter(counter);
  }
}

// Function to handle scroll to top button click event
function handleScrollToTopButtonClick(counter) {
  container.scrollTo({ top: 0, behavior: 'smooth' });
  resetCounter(counter);
}

// Loop through all counters and attach event listeners
counters.forEach((counter) => {
  counter.textContent = 0;

  const continueBtn = document.querySelector('.cont-btn');
  continueBtn.addEventListener('click', () => handleContinueButtonClick(counter));

  container.addEventListener('scroll', () => handleContainerScroll(counter));

  const scrollToTop = document.getElementById('scrollToTopBtn');
  scrollToTop.addEventListener('click', () => handleScrollToTopButtonClick(counter));
});
