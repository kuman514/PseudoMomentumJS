const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const link = document.querySelector('#link');

function onLoginSubmit(event) {
  event.preventDefault();
  console.log(event);
}

function onLinkClick(event) {
  event.preventDefault();
  console.log(event);
  alert('clicked link');
}

loginForm.addEventListener('submit', onLoginSubmit);
link.addEventListener('click', onLinkClick);
