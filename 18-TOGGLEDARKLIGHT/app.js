// DOM Elements
const toggleMode = document.querySelector('input');
const htmlEl = document.documentElement;

// Add event listener and functionality
toggleMode.addEventListener('click', () => {
  const theme = toggleMode.checked ? 'light' : 'dark';
  htmlEl.dataset.theme = theme;
  toggleMode.classList.toggle('fa-sun');
  toggleMode.classList.toggle('fa-moon');
});

// Set default theme based on user preference or system preference
const defaultTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'light' : 'dark';
htmlEl.dataset.theme = defaultTheme;
toggleMode.checked = defaultTheme === 'light';
toggleMode.classList.toggle('fa-sun', defaultTheme === 'dark');
toggleMode.classList.toggle('fa-moon', defaultTheme === 'light');
