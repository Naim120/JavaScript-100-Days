import data from './data.js';

const vtWrapper = document.querySelector('.vt-wrapper');

function createTitleContainer() {
  const titleContainer = document.createElement('div');
  titleContainer.classList.add('use-title');
  return titleContainer;
}

function createDescContainer() {
  const descContainer = document.createElement('div');
  descContainer.classList.add('use-desc');
  return descContainer;
}

function createTabsBtn(tabTitle, id) {
  const { title } = tabTitle;
  const titleBtn = document.createElement('button');
  titleBtn.classList.add('title-btn');
  titleBtn.setAttribute('data-id', id);
  titleBtn.innerHTML = title;
  return titleBtn;
}

function createDescription(tabDesc, id) {
  const { description } = tabDesc;
  const descEl = document.createElement('p');
  descEl.classList.add('desc');
  descEl.dataset.id = id;
  descEl.textContent = description;
  return descEl;
}

function displayTabDesc(infos = data) {
  vtWrapper.innerHTML = '';
  const titleContainer = createTitleContainer();
  const descContainer = createDescContainer();

  infos.forEach((info) => {
    let infoId = info.id;
    let title = info.title;
    let description = info.description;
    // Pass title as an object to the tabs function
    const titleBtn = createTabsBtn({ title }, infoId);

    const descInfo = createDescription({ description }, infoId);
    titleContainer.appendChild(titleBtn);

    descContainer.appendChild(descInfo);
    vtWrapper.appendChild(titleContainer);
    vtWrapper.appendChild(descContainer);
    vtWrapper.insertBefore(titleContainer, descContainer);

    const defaultId = 1;
    if (defaultId === +titleBtn.dataset.id && defaultId === +descInfo.dataset.id ) {
        console.log(descInfo);
        titleBtn.setAttribute('value', 'default value');
        titleBtn.value ="default"
        descInfo.setAttribute('value', 'default value');
        descInfo.style.display = "block"
      } else{
        descInfo.style.display = "none";
      }
  });
}

displayTabDesc();

