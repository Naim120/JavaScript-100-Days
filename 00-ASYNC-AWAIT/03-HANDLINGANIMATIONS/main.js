const createImage = async (url) => {
    const img = new Image();
    await new Promise((resolve, reject) => {
      img.onload = resolve;
      img.onerror = reject;
      img.src = url;
    });
    return img;
  };

  const createContent = (content) => {
    const contentEl = document.createElement('h3');
    contentEl.classList.add('country-name');
    contentEl.innerHTML = content;
    return contentEl;
  };

  const transitionImageIn = async (image) => {
    image.style.opacity = 0;
    image.style.transition = 'opacity 2s ease-in-out';
    image.style.opacity = 1;
  };

  const transitionImageOut = async (image) => {
    image.style.opacity = 1;
    image.style.transition = 'opacity 2s ease-in-out';
    image.style.opacity = 0;
  };

  const removeFirstChild = (element) => {
    element.removeChild(element.firstChild); // url
    element.removeChild(element.firstChild); // content
  };

  const slideshow = async () => {
    const images = [
      { url: 'https://source.unsplash.com/g_gwdpsCVAY', content: 'Germany' },
      { url: 'https://source.unsplash.com/5g8dJvtYRYA', content: 'France' },
      { url: 'https://source.unsplash.com/dBtWLliLt5k', content: 'Italy' },
      { url: 'https://source.unsplash.com/IoUnv2cfx1c', content: 'Switzerland' },
    ];
    const slideshowEl = document.getElementById('slideshow');
    let currentImageIndex = 0;

    while (true) {
      const image = await createImage(images[currentImageIndex].url);
      const contentEl = createContent(images[currentImageIndex].content);

      slideshowEl.appendChild(image);
      slideshowEl.appendChild(contentEl);

      await transitionImageIn(image);
      await new Promise((resolve) => setTimeout(resolve, 3000));
      await transitionImageOut(image);
      removeFirstChild(slideshowEl);

      currentImageIndex = (currentImageIndex + 1) % images.length;
    }
  };

  slideshow();
