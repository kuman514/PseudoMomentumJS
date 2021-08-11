const API_KEY = 'No weather feature due to API key security issues. Use yours, not mine.';
const area = document.querySelector('#weather span:first-child');
const weather = document.querySelector('#weather span:last-child');

function onGeoSuccess(geolocation) {
  const lat = geolocation.coords.latitude;
  const lon = geolocation.coords.longitude;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const areaName = data.name;
      const weatherName = data.weather[0].main;
      const temperature = data.main.temp;
      area.innerText = areaName;
      weather.innerText = `${weatherName} ${temperature}℃`;
    });
}

function onGeoFailure() {
  console.log('Can\'t find geolocation and weather.');
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoFailure);
