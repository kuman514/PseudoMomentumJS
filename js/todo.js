const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-form input');
const todoList = document.querySelector('#todo-list');

function handleToDoSubmit(event) {
  event.preventDefault();
  console.log(todoInput.value);
  const newTodo = todoInput.value;
  todoInput.value = '';
}

todoForm.addEventListener('submit', handleToDoSubmit);
