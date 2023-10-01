const input = document.querySelector('input');
const addTodoBtn = document.querySelector('.add');
const ul = document.querySelector('ul');

addTodoBtn.addEventListener('click', ()=> {
  if(input.value.length > 0) {
    createElementList();
  }
})

function createElementList() {
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(input.value));
  li.classList.add('todos');
  ul.appendChild(li);

  input.value = '';

  const div = document.createElement('div');
  div.classList.add('todo-btns');

  const doneBtn = document.createElement('button');
  doneBtn.appendChild(document.createTextNode('Done'));
  doneBtn.classList.add('doneBtn');
  doneBtn.addEventListener('click', underlineParent);
  div.appendChild(doneBtn);

  const delBtn = document.createElement('button');
  delBtn.appendChild(document.createTextNode('Delete'));
  delBtn.classList.add('delBtn');
  delBtn.addEventListener('click', removeParent);
  div.appendChild(delBtn);

  li.appendChild(div);
}

function underlineParent(event) {
  event.target.parentNode.parentNode.classList.toggle('done');
}

function removeParent(event) {
  event.target.parentNode.parentNode.remove();
}