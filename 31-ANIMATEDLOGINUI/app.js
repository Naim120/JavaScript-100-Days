// ----For Password Visibility-----------
const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#id_password');

togglePassword.addEventListener('click', function () {
  // Toggle the password field type between 'text' and 'password'
  const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
  password.setAttribute('type', type);

  // Toggle the eye icon between 'fa-eye' and 'fa-eye-slash'
  if (this.classList.contains('fa-eye-slash')) {
    this.classList.replace('fa-eye-slash', 'fa-eye');
  } else {
    this.classList.replace('fa-eye', 'fa-eye-slash');
  }
});
