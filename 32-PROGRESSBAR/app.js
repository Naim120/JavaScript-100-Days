const contentProgressBars = document.querySelectorAll('.content');

contentProgressBars.forEach((contentProgressBar) => {
  setInterval(() => {
    contentProgressBar.style.width = contentProgressBar.dataset.content + '%';
    contentProgressBar.style.opacity = 1;
  }, 1000);
});
