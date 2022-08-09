const categoriesEl = document.querySelector('#categories');
const itemsEl = document.querySelectorAll('.item');

console.log(`Number of categories: ${categoriesEl.children.length}`);

itemsEl.forEach(item => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});
