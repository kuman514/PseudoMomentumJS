const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-form input');
const todoList = document.querySelector('#todo-list');

const todos = [];

const TODOS_KEY = 'items';

function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function loadTodos(savedTodos) {
  todos.push(...(savedTodos));
  todos.forEach(paintTodo);
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  const newTodos = todos.filter((todo) => todo.id !== parseInt(li.id));
  li.remove();
  while (todos.length > 0) {
    todos.shift();
  }
  todos.push(...newTodos);
  saveTodos();
}

function paintTodo(newTodo) {
  const li = document.createElement('li');
  li.id = newTodo.id;

  const span = document.createElement('span');
  span.innerText = newTodo.text;

  const btn = document.createElement('button');
  btn.innerText = '❌';
  btn.addEventListener('click', deleteTodo);

  li.appendChild(span);
  li.appendChild(btn);
  todoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  console.log(todoInput.value);
  const newTodo = {
    id: Date.now(),
    text: todoInput.value
  };
  todoInput.value = '';
  todos.push(newTodo);
  paintTodo(newTodo);
  saveTodos();
}

todoForm.addEventListener('submit', handleToDoSubmit);
const savedTodos = localStorage.getItem(TODOS_KEY);
if (savedTodos !== null) {
  const parsedTodos = JSON.parse(savedTodos);
  loadTodos(parsedTodos);
}
