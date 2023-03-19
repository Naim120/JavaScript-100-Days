// DOM Elements
const userLocation = document.querySelector('.location');
const getLocationBtn = document.querySelector('.getlocation-btn');
const addressEl = document.querySelector('.address');
const spinnerEl = document.getElementById('spinner');

// Constants
const OPENCAGE_API_KEY = '0614552a96894195a4a089766b2525a4';

// Event listener to show / hide loading and call Geolocation API
getLocationBtn.addEventListener('click', () => {
  showSpinner();
  setTimeout(() => {
    hideSpinner();
    navigator.geolocation.getCurrentPosition(showPosition);
    navigator.geolocation.getCurrentPosition(showAddress);
  }, 3000);
});

// Functions
function showSpinner() {
  spinnerEl.style.display = 'block';
}

function hideSpinner() {
  spinnerEl.style.display = 'none';
}

function showAddress(position) {
  const { latitude, longitude } = position.coords;
  const url =
    `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${OPENCAGE_API_KEY}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const address = data.results[0].formatted;
      addressEl.innerHTML = `<b>Address:</b> ${address}`;
    })
    .catch((error) => console.log(error));
}

function showPosition(position) {
  const { latitude, longitude } = position.coords;
  userLocation.innerHTML = `<b>Latitude:</b> ${latitude}<br><b>Longitude:</b> ${longitude}`;
}
