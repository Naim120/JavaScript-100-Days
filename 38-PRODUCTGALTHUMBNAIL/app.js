const imgBig = document.querySelector('.img-big img');
const imgThumbnail = document.querySelectorAll('.thumb-btn img');
imgThumbnail.forEach((thumbnail) => {
  thumbnail.addEventListener('click', () => {
    const clickedImgSrc = thumbnail.getAttribute('src');
    imgBig.setAttribute('src', clickedImgSrc);
  });
});
