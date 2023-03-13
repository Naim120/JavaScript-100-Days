const checkInternetStatus = async () => {
  try {
    const response = await fetch('https://i.ibb.co/0mrB1SJ/kfc-png-logo-4094.png');
    return response.ok;
  } catch (error) {
    return false;
  }
};

setInterval(async () => {
  const connection = await checkInternetStatus();
  const statusDisplay = document.querySelector('.text-status');
  const statusImage = document.querySelector('.status-image');
  statusImage.style.color = connection ? '#000' : '#b4b4b4';
  statusDisplay.textContent = connection ? "You're online!" : "You're offline!";
}, 2000);
