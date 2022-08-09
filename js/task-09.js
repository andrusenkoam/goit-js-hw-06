function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  colorEl: document.querySelector('.color'),
  changeColorBtn: document.querySelector('.change-color'),
};

refs.changeColorBtn.addEventListener('click', onChangeColorBtnCkick);

function onChangeColorBtnCkick() {
  const randomColor = getRandomHexColor();

  document.body.style.backgroundColor = randomColor;
  refs.colorEl.textContent = randomColor;
}
