const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const link = document.querySelector('#link');
const afterLogin = document.querySelector('#after-login');
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

function revealAfterLogin() {
  afterLogin.classList.remove(HIDDEN_CLASSNAME);
}

function onLoginSubmit(event) {
  event.preventDefault();
  if (loginInput.value.length > 0) {
    const userName = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, userName);
    paintGreetings(userName);
    revealAfterLogin();
  }
}

function paintGreetings(userName) {
  greeting.innerText = `Hello, ${userName}!`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUserName = localStorage.getItem(USERNAME_KEY);
if (savedUserName === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener('submit', onLoginSubmit);
} else {
  loginForm.classList.add(HIDDEN_CLASSNAME);
  paintGreetings(savedUserName);
  revealAfterLogin();
}
