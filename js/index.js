const createListToDo = document.getElementById('createListToDo');
const addButton = document.getElementById('addButton');
const outputBox = document.getElementById('outputBox');
const form = document.getElementById('form');
const search = document.getElementById('search');

let listInArray = localStorage.getItem('listToDo') ? JSON.parse(localStorage.getItem('listToDo')) : [];

localStorage.setItem('listToDo', JSON.stringify(listInArray));
const data = JSON.parse(localStorage.getItem('listToDo'));

const listToDo = (text) => {
  const div = document.createElement('div');
  div.innerHTML = `${text} <i onclick='deleteToDo()' class='fa fa-remove'></i>`;
  outputBox.appendChild(div);
}

const createToDo = function(e) {
  e.preventDefault();

  if (createListToDo.value == '') {
    alert('Enter a List ToDo You Want');
  } else {
    listInArray.push({
      todo: createListToDo.value,
    });
    localStorage.setItem('listToDo', JSON.stringify(listInArray));
    listToDo(createListToDo.value);
    createListToDo.value = '';
  };
};

const deleteToDo = node => {
  outputBox.removeChild(outputBox.lastElementChild);
  listInArray.splice('listToDo', 1);
  localStorage.setItem('listToDo', JSON.stringify(listInArray));
};

// const searchToDo = () 






// Listener
addButton.addEventListener('click', createToDo);
form.addEventListener('submit', createToDo);
