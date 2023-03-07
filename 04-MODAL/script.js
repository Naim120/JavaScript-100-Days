// Select the DOM Elements
const modalBtn = document.querySelector('.modal_btn');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close_btn');

// Add event listeners to DOM Elements
modalBtn.addEventListener('click', showModal);
closeBtn.addEventListener('click', hideModal);

// Define event listener functions
function showModal() {
    modal.classList.add('active');
  modal.classList.remove('inactive');
  modal.style.display = 'block';
}

function hideModal(){
    modal.classList.remove('active');
  modal.classList.add('inactive');
  setTimeout(() => {
    modal.style.display = 'none';
  }, 1000);
}

