const searchContainer = document.querySelector('.search');

document.querySelector('.search-btn').addEventListener('click', () => {
  searchContainer.classList.add('show');
  searchContainer.classList.remove('hide');
});

document.querySelector('.close-btn').addEventListener('click', () => {
  searchContainer.classList.remove('show');
  searchContainer.classList.add('hide');
});
