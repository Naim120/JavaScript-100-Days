const form = document.querySelector('#signup-form');
const emailInput = form.querySelector('#email');

function validateEmail() {
  const email = emailInput.value;
  if (!email) {
    setError('Please enter an email address.');
    return false;
  }
  if (!/\S+@\S+\.\S+/.test(email)) {
    setError('Please enter a valid email address.');
    return false;
  }
  setSuccess();
  return true;
}

function setError(errorMessage) {
  const emailWrapper = emailInput.parentElement;
  const feedback = emailWrapper.querySelector('.invalid-feedback');
  emailWrapper.classList.add('was-validated');
  emailInput.classList.add('is-invalid');
  feedback.innerText = errorMessage;
}

function setSuccess() {
  const emailWrapper = emailInput.parentElement;
  emailWrapper.classList.add('was-validated');
  emailInput.classList.remove('is-invalid');
  emailInput.classList.add('is-valid');
}

form.addEventListener('submit', function(event) {
  event.preventDefault();
  if (validateEmail()) {
    form.submit();
  }
});
