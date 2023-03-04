const count = document.querySelector('.count');
const subtract = document.querySelector('.dec');
const reset = document.querySelector('.reset');
const add = document.querySelector('.inc');

add.addEventListener('click', () => {
  count.innerHTML++;
});

subtract.addEventListener('click', () => {
  count.innerHTML--;
});

reset.addEventListener('click', () => {
  count.innerHTML = 0;
});
