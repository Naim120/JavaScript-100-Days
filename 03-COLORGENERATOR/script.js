const randomColor = document.querySelector('.rand_color');
const genBtn = document.querySelector('.gen_button');
const container = document.querySelector('.container');

// genBtn.addEventListener('click', () => {
//   const randomHexColor = Math.floor(Math.random() * 16777215).toString(16);
//   randomColor.textContent = `#${randomHexColor}`;
//   container.style.backgroundColor = "#" + randomHexColor;
// });

// Alternative

const getRandomColor = () => {
  const randomHexColor = Math.floor(Math.random() * 16777215).toString(16);
  // const randomHexColor = Math.random().toString(16).substring(2, 8);
  randomColor.textContent = `#${randomHexColor}`;
  container.style.backgroundColor = "#" + randomHexColor;
}

genBtn.addEventListener('click', getRandomColor)
// To generate color once reload
getRandomColor();