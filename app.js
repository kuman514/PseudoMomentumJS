const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const link = document.querySelector('#link');

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  loginForm.classList.add('hidden');
  console.log(`Hello, ${username}!`);
}

loginForm.addEventListener('submit', onLoginSubmit);
link.addEventListener('click', onLinkClick);
