const images = ['0.jpeg', '1.jpeg', '2.jpeg'];
const chosenImage = images[Math.ceil(Math.random() * images.length) - 1];

const bgImg = document.createElement('img');
bgImg.src = `img/${chosenImage}`;
document.body.appendChild(bgImg);
