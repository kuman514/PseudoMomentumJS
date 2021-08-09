const clock = document.querySelector('#clock');

function paintDate() {
  clock.innerText = Date();
}

paintDate();
setInterval(paintDate, 1000);
