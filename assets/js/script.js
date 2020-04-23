const currentBackgroundText = document.querySelector('h3');
const body = document.querySelector('body');
const degreeSlider = document.querySelector('.input-range');
const colors = document.getElementById('colors');
const colorArr = document.getElementsByClassName('input-color');
const addColor = document.getElementById('js--add-color');

/*let newColor = document.createElement('input');
newColor.type = 'color';
newColor.className = 'input-color';
colors.appendChild(newColor);*/

function returnGradient() {
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

function setNewColor() {
  let newColor = document.createElement('input');
  newColor.type = 'color';
  newColor.className = 'input-color';
  newColor.id = `color-${colorArr.length + 1}`;
  colors.insertBefore(
    newColor,
    colors.childNodes[colors.childNodes.length - 2]
  );
  setEvent(colorArr[colorArr.length - 1], 'input', setGradient);
}

function setGradient() {
  body.style.background = returnGradient();
  currentBackgroundText.textContent = body.style.background + ';';
}

function setDegree() {
  body.style.background = returnGradient();
  currentBackgroundText.textContent = body.style.background + ';';
}

for (let i = 0; i < colorArr.length; i++) {
  setEvent(colorArr[i], 'input', setGradient);
  console.log('hello');
}

setEvent(degreeSlider, 'input', setDegree);

setEvent(addColor, 'click', setNewColor);
