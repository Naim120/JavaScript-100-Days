const modalBtn = document.querySelector('.modal_btn');
const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal_content');
const closeBtn = document.querySelector('.close_btn');

modalBtn.addEventListener('click', () => {
  modal.classList.add('active');
  modal.classList.remove('inactive');
  modal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  modal.classList.remove('active');
  modal.classList.add('inactive');
  setTimeout(() => {
    modal.style.display = 'none';
  }, 1000);
});
