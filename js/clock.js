const clock = document.querySelector('#clock');
const dayNames = ['일', '월', '화', '수', '목', '금', '토'];

function paintDate() {
  const date = new Date();
  const [year, month, day, dayName, hour, minute, second] = [
    date.getFullYear(),
    date.getMonth() + 1,
    date.getDate(),
    date.getDay(),
    String(date.getHours()).padStart(2, '0'),
    String(date.getMinutes()).padStart(2, '0'),
    String(date.getSeconds()).padStart(2, '0')
  ];
  clock.innerText = `${year}년 ${month}월 ${day}일 ${dayNames[dayName]}요일 ${hour}:${minute}:${second}`;
}

function sayHello() {
  console.log('Hello');
}

paintDate();
setInterval(paintDate, 1000);
setTimeout(sayHello, 2000);
