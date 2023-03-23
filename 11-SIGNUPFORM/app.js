const form = document.querySelector('#signup');
const NAME_REQUIRED = 'Please enter your name';
const EMAIL_REQUIRED = 'Please enter your email';
const EMAIL_INVALID = 'Please enter a valid email address';

// Show a message with a type of the input
function showMessage(input, message, isValid) {
  const msg = input.parentNode.querySelector('small');
  msg.innerText = message;
  input.className = isValid ? 'success' : 'error';
  return isValid;
}

let isSubscribed = false;

// Show an error message for an input
function showError(input, message) {
  return showMessage(input, message, false);
}

// Show a success message for an input
function showSuccess(input) {
  return showMessage(input, '', true);
}

// Check if an input has a value
function hasValue(input, message) {
  return input.value.trim() === '' ? showError(input, message) : showSuccess(input);
}

// Validate email format
function validateEmail(input, requiredMsg, invalidMsg) {
  if (!hasValue(input, requiredMsg)) {
    return false;
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const email = input.value.trim();
  return emailRegex.test(email) ? showSuccess(input) : showError(input, invalidMsg);
}

// Handle form submission
form.addEventListener('submit', function (event) {
  event.preventDefault();

  // Check if already subscribed and disable
  if (isSubscribed) {
    return;
  }

  // Validate form inputs
  const nameInput = form.elements['name'];
  const emailInput = form.elements['email'];

  const isNameValid = hasValue(nameInput, NAME_REQUIRED);
  const isEmailValid = validateEmail(emailInput, EMAIL_REQUIRED, EMAIL_INVALID);

  if (isNameValid && isEmailValid) {
    isSubscribed = true;

    // Show success message
    const successMsg = document.createElement('p');
    successMsg.classList.add('congrats-msg');
    successMsg.textContent =
      'Congratulations on subscribing! You will now receive updates about our latest products and promotions. Thank you for your interest!';
    const successContainer = document.querySelector('.success-msg');
    successContainer.appendChild(successMsg);

    // Reset form after 3 seconds and remove success message
    setTimeout(function() {
      form.reset();
      successContainer.removeChild(successMsg);
      isSubscribed = false;
    }, 8000);
  }
});

// Reset subscribed state on form reset
form.addEventListener('reset', function () {
  isSubscribed = false;
});
