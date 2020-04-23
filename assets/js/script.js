const currentBackgroundText = document.querySelector('h3');
const body = document.querySelector('body');
const degreeSlider = document.querySelector('.input-range');
const colorArr = document.getElementsByClassName('input-color');
const addColor = document.getElementById('js--add-color');

function getGradient() {
  let linearGrad = `linear-gradient(${degreeSlider.value}deg`;

  for (let i = 0; i < colorArr.length; i++) {
    linearGrad = linearGrad.concat(', ', colorArr[i].value);
  }

  linearGrad = linearGrad.concat(')');
  return linearGrad;
}

function setEvent(el, event, func) {
  el.addEventListener(event, func);
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  var color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function setNewColor() {
  const colors = document.getElementById('colors');
  const newColor = document.createElement('input');
  newColor.type = 'color';
  newColor.className = 'input-color';
  newColor.id = `color-${colorArr.length + 1}`;
  newColor.value = getRandomColor();
  colors.insertBefore(
    newColor,
    colors.childNodes[colors.childNodes.length - 2]
  );
  setEvent(colorArr[colorArr.length - 1], 'input', changeGradient);
  body.style.background = getGradient();
}

function changeGradient() {
  body.style.background = getGradient();
  currentBackgroundText.textContent = body.style.background + ';';
}

function setDegree() {
  body.style.background = getGradient();
  currentBackgroundText.textContent = body.style.background + ';';
}

function resetColors() {
  for (color of colorArr) {
    color.value = getRandomColor();
  }
  body.style.background = getGradient();
  currentBackgroundText.textContent = body.style.background + ';';
}

function updateColor() {}

resetColors();

for (let i = 0; i < colorArr.length; i++) {
  setEvent(colorArr[i], 'input', changeGradient);
}

setEvent(degreeSlider, 'input', setDegree);

setEvent(addColor, 'click', setNewColor);
