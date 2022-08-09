function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxesArr = [];
const refs = {
  input: document.querySelector('input'),
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
  boxes: document.querySelector('#boxes'),
};

refs.input.addEventListener('input', onBoxesInput);

function onBoxesInput(event) {
  refs.createBtn.addEventListener('click', onCreateBtnClick);
}

function onCreateBtnClick() {
  createBoxes(refs.input.value);
  refs.boxes.insertAdjacentHTML('beforeend', boxesArr.join(''));
  refs.destroyBtn.addEventListener('click', onDestroyBtnClick);
  refs.createBtn.removeEventListener('click', onCreateBtnClick);
}

function onDestroyBtnClick() {
  refs.boxes.innerHTML = '';
  boxesArr.length = 0;
  refs.destroyBtn.removeEventListener('click', onDestroyBtnClick);
  refs.input.value = '';
}

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    const boxBgColor = getRandomHexColor();
    const boxSize = 30;
    let changeSize = boxSize + i * 10;
    const boxItem = `
		<div style="width:${changeSize}px;
		height:${changeSize}px;
		background-color:${boxBgColor}"></div>
		`;

    boxesArr.push(boxItem);
  }
}
