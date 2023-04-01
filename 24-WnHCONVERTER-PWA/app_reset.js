function resetConverter() {
  // reset weight input fields
  document.getElementById('kg').value = '';
  document.getElementById('lb').value = '';
  document.getElementById('oz').value = '';
  document.getElementById('gms').value = '';

  // reset height input fields
  document.getElementById('ft').value = '';
  document.getElementById('cm').value = '';
  document.getElementById('m').value = '';
  document.getElementById('in').value = '';

  // add event listener to reset button
}

  document
    .querySelector('.reset-btn')
    .addEventListener('click', resetConverter);
