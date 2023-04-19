//Select DOM Elements
const registerCard = document.querySelector('.register-cont');
const registerLink = document.querySelector('.register-link');
const loginCard = document.querySelector('.login-cont');
const loginBtn = document.querySelector('.login-btn');
const forgotPassLink = document.querySelector('.forgot-pass');
const registerBtn = document.querySelector('.register-btn');
const resetCard = document.querySelector('.reset-cont');
const resetLink = document.querySelector('.reset-btn');
const loginLink = document.querySelector('.login-link');
const resetBtn = document.querySelector('.reset-btn');
const closeResetBtn = document.querySelector('.close-resetBtn');

// Hide reset and register cards by default
resetCard.style.display = 'none';
registerCard.style.display = 'none';

// Register click events
registerLink.addEventListener('click', showRegisterCard);
loginLink.addEventListener('click', showLoginCard);
forgotPassLink.addEventListener('click', showResetCard);
closeResetBtn.addEventListener('click', hideResetCard);
loginBtn.addEventListener('click', clearLoginForm);
registerBtn.addEventListener('click', clearRegisterForm);
resetBtn.addEventListener('click', clearResetForm);

// Functions to handle events
function showRegisterCard(e) {
  e.preventDefault();
  loginCard.style.display = 'none';
  resetCard.style.display = 'none';
  registerCard.style.display = 'flex';
}

function showLoginCard(e) {
  e.preventDefault();
  registerCard.style.display = 'none';
  loginCard.style.display = 'flex';
  resetCard.style.display = 'none';
}

function showResetCard(e) {
  e.preventDefault();
  loginCard.style.display = 'none';
  registerCard.style.display = 'none';
  resetCard.style.display = 'flex';
}

function hideResetCard(e) {
  e.preventDefault();
  loginCard.style.display = 'flex';
  registerCard.style.display = 'none';
  resetCard.style.display = 'none';
}

function clearLoginForm(e) {
  e.preventDefault();
  document.querySelector('.username').value = '';
  document.querySelector('.password').value = '';
}

function clearRegisterForm(e) {
  e.preventDefault();
  document.querySelector('.user-regr').value = '';
  document.querySelector('.email').value = '';
  document.querySelector('.pass-regr').value = '';
}

function clearResetForm(e) {
  e.preventDefault();
  document.querySelector('.email-reset').value = '';
}

// ----For Password Visibility-----------
const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#id_password');

togglePassword.addEventListener('click', function () {
  // Toggle the password field type between 'text' and 'password'
  const type =
    password.getAttribute('type') === 'password' ? 'text' : 'password';
  password.setAttribute('type', type);

  // Toggle the eye icon between 'fa-eye' and 'fa-eye-slash'
  if (this.classList.contains('fa-eye-slash')) {
    this.classList.replace('fa-eye-slash', 'fa-eye');
  } else {
    this.classList.replace('fa-eye', 'fa-eye-slash');
  }
});
