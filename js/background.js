const images = ['0.jpeg', '1.jpeg', '2.jpeg'];
const chosenImage = `img/${images[Math.ceil(Math.random() * images.length) - 1]}`;

document.body.style.setProperty('background-image', `url('${chosenImage}')`);
