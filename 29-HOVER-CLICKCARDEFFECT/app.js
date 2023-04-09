import data from './data.js';

// function UI Creation
function createPersonalUI(profileData) {
  const { imageUrl, name, profession } = profileData;
  const personalData = document.createElement('div');
  personalData.classList.add('profile-details');
  personalData.innerHTML = `
    <div class="img-cont">
    <img class="profile-pic" src="${imageUrl}" />
  </div>
  <h2 class="name">${name}</h2>
  <p class="profession">${profession}</p>
</div>
    `;
  return personalData;
}

function createExperienceUI(expData) {
  const { experience } = expData;
  const expWrapper = document.createElement('div');
  expWrapper.classList.add('exp-wrapper');
  expWrapper.innerHTML = `
    <p class="experience" data-text="exp">${experience}</p>
    `;
  return expWrapper;
}

// function UI Display
function createUIDisplay(details = data) {
  const profileContainer = document.querySelector('.profile-container');
  profileContainer.innerHtml = '';
  details.forEach((detail) => {
    const pData = createPersonalUI(detail);
    const expWrapper = createExperienceUI(detail);
    profileContainer.appendChild(pData);
    profileContainer.appendChild(expWrapper);
  });
}

createUIDisplay();
