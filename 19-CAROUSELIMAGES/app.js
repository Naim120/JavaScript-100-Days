// Get DOM elements
const listImages = document.querySelector('.list-images');
// converts into an Array all the children
const imgs = Array.from(listImages.children);
const nextBtn = document.querySelector('.right-arrow');
const prevBtn = document.querySelector('.left-arrow');

// Constant for image width
const imgWidth = "30";

// Calculate and set image positions
imgs.forEach((img, index) => {
    img.style.left = imgWidth * index + "rem";
});

// Move to a specific image
const moveToImg = (list, currentImg, targetImg) => {
    list.style.transform = `translateX(-${targetImg.style.left})`;
    currentImg.classList.remove('current-img');
    targetImg.classList.add('current-img');
};

// Show/hide arrows based on current image
const hideShowArrows = (imgs, prevBtn, nextBtn, currentIndex) => {
    prevBtn.classList.toggle('hidden', currentIndex === 0);
    nextBtn.classList.toggle('hidden', currentIndex === imgs.length - 1);
};

// Clicking the right button moves image to the left
nextBtn.addEventListener('click', () => {
    const currentImg = listImages.querySelector('.current-img');
    const nextImg = currentImg.nextElementSibling;
    const nextIndex = imgs.indexOf(nextImg);

    moveToImg(listImages, currentImg, nextImg);
    hideShowArrows(imgs, prevBtn, nextBtn, nextIndex);
});

// Clicking the left button moves image to the right
prevBtn.addEventListener('click', () => {
    const currentImg = listImages.querySelector('.current-img');
    const prevImg = currentImg.previousElementSibling;
    const prevIndex = imgs.indexOf(prevImg);

    moveToImg(listImages, currentImg, prevImg);
    hideShowArrows(imgs, prevBtn, nextBtn, prevIndex);
});
