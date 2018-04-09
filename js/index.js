const createListToDo = document.getElementById('createListToDo');
const addButton = document.getElementById('addButton');
const outputBox = document.getElementById('outputBox');
const form = document.getElementById('form');
const search = document.getElementById('search');

let listInArray = localStorage.getItem('listToDo') ? JSON.parse(localStorage.getItem('listToDo')) : [];

localStorage.setItem('listToDo', JSON.stringify(listInArray));
let data = JSON.parse(localStorage.getItem('listToDo'));


const listToDo = (text) => {
  let div = document.createElement('div');
  div.setAttribute('id', 'index');
  div.innerHTML = `${text}
  <span onclick='deleteToDo()' class='fa fa-remove'></span>
  <span onclick='editToDo()' class='fa edit'>edit</span>`;
  outputBox.appendChild(div);
};


const createToDo = function(e) {
  e.preventDefault();

  if (createListToDo.value === '') {
    alert('Enter a List ToDo You Want');
  } else if (createListToDo.value === '  ') {
    alert('List can not be just space!!')
  } else {
    listInArray.push(createListToDo.value);
    localStorage.setItem('listToDo', JSON.stringify(listInArray));
    listToDo(createListToDo.value);
    createListToDo.value = '';
  };
};


const deleteToDo = () => {
  outputBox.removeChild(outputBox.lastElementChild);
  listInArray.splice('listToDo', 1);
  localStorage.setItem('listToDo', JSON.stringify(listInArray));
};


const searchToDo = function() {
  let searchToDoList = document.getElementById('searchToDoList');
  let text = searchToDoList.value.toLowerCase()
  let find = listInArray.filter(word => word.toLowerCase().includes(text));
  alert(find.join(', '));
};


const editToDo = (index) => { // localStorage not change when edit
  content = prompt('input your list here');
  let eachToDo = document.getElementById('index');

  if (content === '') {
    alert('please create your new todo');
  } else {
    eachToDo.innerHTML = `${content}
    <span onclick='deleteToDo()' class='fa fa-remove'></span>
    <span onclick='editToDo()' class='fa edit' >edit</span>`;
  };

};

data.forEach(item => {
  listToDo(item);
});


// Listener
addButton.addEventListener('click', createToDo);
form.addEventListener('submit', createToDo);
search.addEventListener('submit', searchToDo);
