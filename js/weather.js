function onGeoSuccess(geolocation) {
  const lat = geolocation.coords.latitude;
  const lon = geolocation.coords.longitude;
  console.log(lat, lon);
}

function onGeoFailure() {
  console.log('Can\'t find geolocation and weather.');
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoFailure);
