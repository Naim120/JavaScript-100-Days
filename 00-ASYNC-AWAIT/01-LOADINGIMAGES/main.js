async function loadImages() {
    const imageUrls = [
      'images/photo1.jpg',
      'images/photo2.jpg',
      'images/photo3.jpg',
      'images/photo4.jpg',
    ];
    const className = 'imgPhoto';
    const imageGallery = document.querySelector('.image-gallery');

    try {
      const promises = imageUrls.map((url) => {
        return new Promise((resolve, reject) => {
          const image = new Image();
          image.onload = () => resolve(url);
          image.onerror = () => reject(url);
          image.src = url;
        });
      });
      await Promise.all(promises);

      const imageEls = imageUrls.map((image, index) => {
        const img = document.createElement('img');
        img.src = image;
        img.classList.add(`${className}-${index + 1}`);
        return img;
      });
      imageGallery.append(...imageEls);
    } catch (error) {
      const container = document.querySelector('.container');
      const errorEl = document.createElement('h6');
      errorEl.classList.add('error-msg');
      errorEl.textContent = 'Image is Not Available';
      container.appendChild(errorEl);
    }
  }

  loadImages();

// image 1 -"https://source.unsplash.com/IYjcszjmu78"
// image 2 -"https://source.unsplash.com/NPRwhYITeU0"
// image 3 -"https://source.unsplash.com/aAAeNHbe07Q"
// image 4 -"https://source.unsplash.com/jK9ZLC53__0"