const createListToDo = document.getElementById('createListToDo');
const addButton = document.getElementById('addButton');
const outputBox = document.getElementById('outputBox');
const form = document.getElementById('form');

let listInArray = [];
//localStorage.getItem('listToDo') ? JSON.parse(localStorage.getItem('listToDo')) : [];

localStorage.setItem('listToDo', JSON.stringify(listInArray));
const data = JSON.parse(localStorage.getItem('listToDo'));

const listToDo = (text) => {
  const div = document.createElement('div');
  div.innerHTML = `${text} <i onclick='deleteToDo()' class='fa fa-remove'></i>`;
  outputBox.appendChild(div);
}

const createToDo = function(e) {
  e.preventDefault();

  listToDo(createListToDo.value);
  listInArray.push(createListToDo.value);
  localStorage.setItem('listToDo', JSON.stringify(listInArray));
  createListToDo.value = '';
};

const deleteToDo = node => {
  outputBox.removeChild(outputBox.lastElementChild);
};







addButton.addEventListener('click', createToDo);
form.addEventListener('submit', createToDo);
