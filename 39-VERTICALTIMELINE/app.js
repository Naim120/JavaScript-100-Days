(function () {
  const items = document.querySelectorAll('li');

  function isElementInViewport(el) {
    const { top, left, bottom, right } = el.getBoundingClientRect();
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;
    const windowWidth =
      window.innerWidth || document.documentElement.clientWidth;
    return (
      top >= 0 && left >= 0 && bottom <= windowHeight && right <= windowWidth
    );
  }

  function slideIn() {
    for (let i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add('slide-in');
      } else {
        items[i].classList.remove('slide-in');
      }
    }
  }

  window.addEventListener('load', slideIn);
  window.addEventListener('scroll', slideIn);
  window.addEventListener('resize', slideIn);
})();
