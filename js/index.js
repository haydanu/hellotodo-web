const createListToDo = document.getElementById('createListToDo');
const addButton = document.getElementById('addButton');
const outputBox = document.getElementById('outputBox');
const form = document.getElementById('form');
const search = document.getElementById('search');

let listInArray = localStorage.getItem('listToDo') ? JSON.parse(localStorage.getItem('listToDo')) : [];

localStorage.setItem('listToDo', JSON.stringify(listInArray));
let data = JSON.parse(localStorage.getItem('listToDo'));


const listToDo = (text, index) => {
  //create div -> append ke output
  let div = document.createElement('div');
  div.setAttribute('id', 'index');
  div.innerHTML = `${text}
  <span onclick='deleteToDo(${index})' class='fa fa-remove'></span>
  <span onclick='editToDo(${index})' class='fa edit'>edit</span>`;
  outputBox.appendChild(div);
};


const createToDo = function(e) {
  e.preventDefault();

  if (createListToDo.value === '') {
    alert('Enter a List ToDo You Want');
  // } else if (createListToDo.value == ' ') {
  //   alert('List can not be just space!!')
  } else {
    listInArray.push(createListToDo.value);
    localStorage.setItem('listToDo', JSON.stringify(listInArray));
    createListToDo.value = '';
    display();
  };


};


const deleteToDo = (index) => {
  // outputBox.removeChild(outputBox.lastElementChild);
  listInArray.splice(index, 1);
  localStorage.setItem('listToDo', JSON.stringify(listInArray));
  display();
};


const searchToDo = function() {
  let searchToDoList = document.getElementById('searchToDoList');
  let text = searchToDoList.value.toLowerCase()
  let find = listInArray.filter(word => word.toLowerCase().includes(text));
  alert(find.join(', '));
};


const editToDo = (index) => { // localStorage not change when edit
  content = prompt('input your list here');

  if (content === '') {
    alert('please create your new todo');
  } else {
    listInArray[index] = content;
    localStorage.setItem('listToDo', JSON.stringify(listInArray));
    display();
  };

};

function display(){
  let data = JSON.parse(localStorage.getItem('listToDo'));
  outputBox.innerHTML = ""
  data.forEach((item, index) => {
    listToDo(item, index);
  });
}

display();



// Listener
addButton.addEventListener('click', createToDo);
form.addEventListener('submit', createToDo);
search.addEventListener('submit', searchToDo);
