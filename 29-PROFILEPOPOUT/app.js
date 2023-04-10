// Import data from './data.js';
import data from './data.js';

// Function to create UI for personal profile
function createPersonalUI(profileData) {
  // Destructure the profileData object
  const { imageUrl, name, profession, experience } = profileData;

  // Create a new div element for personal data
  const personalData = document.createElement('div');
  personalData.classList.add('profile-details');
  personalData.innerHTML = `
    <div class="img-cont">
      <img class="profile-pic" src="${imageUrl}" />
    </div>
    <h2 class="name">${name}</h2>
    <p class="profession">${profession}</p>
    <p class="exp">${experience}</p>
  </div>
  `;

  return personalData;
}

// Function to display UI
function createUIDisplay(details = data) {
  // Get the profile container element
  const profileContainer = document.querySelector('.profile-container');

  // Clear the container before populating with new data
  profileContainer.innerHTML = '';

  // Loop through the details and create UI for each profile
  details.forEach((detail) => {
    const pData = createPersonalUI(detail);
    profileContainer.appendChild(pData);
  });
}

// Call the createUIDisplay function to display initial UI
createUIDisplay();

// Function to add event listener for experience
function getExperience() {
  // Get all profile detail elements
  const pDatas = document.querySelectorAll('.profile-details');

  // Add click event listener to each profile detail element
  pDatas.forEach((pData) => {
    pData.addEventListener('click', () => {
      // Toggle 'transform--active' class to show/hide experience
      pData.classList.toggle('transform--active');
    });
  });
}

// Call the getExperience function to add event listeners
getExperience();
