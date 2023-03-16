async function validateEmail(email) {
  const apiKey = 'at_dUYWcYSbQcexAJ0vvIRzwMChWwSzB';
  const url = `https://emailverification.whoisxmlapi.com/api/v2?apiKey=${apiKey}&emailAddress=${email}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.formatCheck === 'true';
}

async function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value;
  const isEmailValid = await validateEmail(email);
  if (!isEmailValid) {
    const error = document.createElement('p');
    error.innerText = 'Please enter a valid email address.';
    error.classList.add('text-danger');
    form.insertBefore(error, form.elements.submit);
  } else {
    form.submit();
  }
}

const form = document.getElementById('signup-form');
form.addEventListener('submit', handleSubmit);
