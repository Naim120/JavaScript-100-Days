const links = document.querySelectorAll('.nav-list li a');

for (const link of links) {
  link.addEventListener('click', smoothScroll);
}

function smoothScroll(e) {
  e.preventDefault();
  const linkRef = this.getAttribute('href');
  const targetEl = document.querySelector(linkRef);
  targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
