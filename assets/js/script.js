const currentBackground = document.querySelector('h3');
const color_one = document.querySelector('.input-color-one');
const color_two = document.querySelector('.input-color-two');
const body = document.querySelector('body');
const range = document.querySelector('.input-range');

function setGradient() {
  body.style.background =
    'linear-gradient(90deg, ' + color_one.value + ', ' + color_two.value + ')';
  currentBackground.textContent = body.style.background + ';';
}

function setDegree() {
  body.style.background =
    'linear-gradient(' +
    range.value +
    'deg,' +
    color_one.value +
    ', ' +
    color_two.value +
    ')';
  currentBackground.textContent = body.style.background + ';';
}

color_one.addEventListener('input', setGradient);

color_two.addEventListener('input', setGradient);

range.addEventListener('input', setDegree);
