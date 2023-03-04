const count = document.querySelector('.count');
const buttons = document.querySelector('.buttons');

buttons.addEventListener('click', (e) => {
  if (e.target.classList.contains('inc')) {
    count.innerHTML++;
    setColor();
  }

  if (e.target.classList.contains('dec')) {
    count.innerHTML--;
    setColor();
  }

  if (e.target.classList.contains('reset')) {
    count.innerHTML = 0;
    setColor();
  }
});

function setColor() {
  if (count.innerHTML > 0) {
    count.style.color = '#31326f';
  } else if (count.innerHTML < 0) {
    count.style.color = 'pink';
  } else {
    count.style.color = '#fff';
  }
}
