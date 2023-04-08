import data from './data.js';

const vtWrapper = document.querySelector('.vt-wrapper');
const titleContainer = createTitleContainer();
const descContainer = createDescContainer();
vtWrapper.appendChild(titleContainer);
vtWrapper.appendChild(descContainer);

function createTitleContainer() {
  // Create title container element
  const titleContainer = document.createElement('div');
  titleContainer.classList.add('use-title');
  return titleContainer;
}

function createDescContainer() {
  // Create description container element
  const descContainer = document.createElement('div');
  descContainer.classList.add('use-desc');
  return descContainer;
}

function createTabsBtn(tabTitle, id) {
  // Create title button element
  const { title } = tabTitle;
  const titleBtn = document.createElement('button');
  titleBtn.classList.add('title-btn');
  titleBtn.setAttribute('data-id', id);
  titleBtn.innerHTML = title;
  return titleBtn;
}

function createDescription(tabDesc, id) {
  // Create description element
  const { description } = tabDesc;
  const descEl = document.createElement('p');
  descEl.classList.add('desc');
  descEl.dataset.id = id;
  descEl.textContent = description;
  return descEl;
}

function displayTabDesc(infos = data) {
  titleContainer.innerHTML = '';
  descContainer.innerHTML = '';

  infos.forEach((info) => {
    let infoId = info.id;
    let title = info.title;
    let description = info.description;
    // Pass title as an object to the tabs function
    const titleBtn = createTabsBtn({ title }, infoId);
    const descInfo = createDescription({ description }, infoId);
    titleContainer.appendChild(titleBtn);
    descContainer.appendChild(descInfo);

    descInfo.style.display = infoId === 1 ? 'block' : 'none';
    if (infoId === 1) {
      titleBtn.classList.add('tab--active');
    }
  });

  // Handle click event on title container
  titleContainer.addEventListener('click', (event) => {
    const selectedTitleBtn = event.target.closest('.title-btn');
    if (selectedTitleBtn) {
      const selectedTitleBtnId = parseInt(selectedTitleBtn.dataset.id);
      updateDescInfo(selectedTitleBtnId);
      updateTitleButtons(selectedTitleBtnId);
    }
  });
}

displayTabDesc();

function updateDescInfo(selectedTitleBtnId) {
  const descInfos = document.querySelectorAll('.use-desc .desc');
  descInfos.forEach((descInfo) => {
    const descInfoId = parseInt(descInfo.dataset.id);
    if (selectedTitleBtnId === descInfoId) {
      descInfo.style.display = 'block';
    } else {
      descInfo.style.display = 'none';
    }
  });
}

function updateTitleButtons(selectedTitleBtnId) {
  const titleBtns = document.querySelectorAll('.title-btn');
  titleBtns.forEach((titleBtn) => {
    const titleBtnId = parseInt(titleBtn.dataset.id);
    if (selectedTitleBtnId === titleBtnId) {
      titleBtn.classList.add('tab--active');
    } else {
      titleBtn.classList.remove('tab--active');
    }
  });
}


