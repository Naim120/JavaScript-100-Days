const randomNum = document.querySelector('.rand_num');
const genBtn = document.querySelector('.gen_button');

genBtn.addEventListener('click', () => {
  const randomNumber = Math.floor(Math.random() * (20 + 1));
  randomNum.textContent = randomNumber;
});

//Alternative for above

// const generateRandomNumber = () => {
//   const randomNumber = Math.floor(Math.random() * (20 + 1) + 1);
//   randomNum.textContent = randomNumber;
// };

// genBtn.addEventListener('click', generateRandomNumber);

// page reload add below:

// generateRandomNumber();
