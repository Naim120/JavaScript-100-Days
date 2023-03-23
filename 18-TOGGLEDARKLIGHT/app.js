const toggleMode = document.querySelector('input');
const htmlEl = document.documentElement;

toggleMode.addEventListener('click', () => {
  const theme = toggleMode.checked ? 'light' : 'dark';
  htmlEl.dataset.theme = theme;
  toggleMode.classList.toggle('fa-sun');
  toggleMode.classList.toggle('fa-moon');
});

// The setAttribute method has been replaced with the dataset property to set the data-theme attribute. Additionally, the classList.remove and classList.add methods have been replaced with the classList.toggle method which toggles the presence of a class based on the checkbox state. Finally, the ternary operator has been adjusted to ensure that the theme variable is set correctly based on the checkbox state.


