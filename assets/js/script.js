const currentBackground = document.querySelector('h3');
const color_one = document.getElementById('color-1');
const color_two = document.getElementById('color-2');
const body = document.querySelector('body');
const range = document.querySelector('.input-range');
const colors = document.getElementById('colors');

let newColor = document.createElement('input');
newColor.type = 'color';
newColor.className = 'input-color';
colors.appendChild(newColor);

const colorArr = document.getElementsByClassName('input-color');

function resetValues() {
  color_one.value = 'rgb(134, 134, 134)';
  color_two.value = 0;
  range.value = 0;
}

function setGradient2() {
  let linearGrad = `linear-gradient(${range.value}deg`;

  for (let i = 0; i < colorArr.length; i++) {
    linearGrad = linearGrad.concat(', ', colorArr[i].value);
    //console.log(colorArr[i].value);
  }
  linearGrad = linearGrad.concat(')');
  console.log(linearGrad);
  //body.style.background = `linear-gradient(${range.value}deg, ${color_one.value}, ${color_two.value})`;

  body.style.background = linearGrad;
  currentBackground.textContent = body.style.background + ';';
}

function setGradient() {
  body.style.background = `linear-gradient(${range.value}deg, ${color_one.value}, ${color_two.value})`;
  currentBackground.textContent = body.style.background + ';';
}

function setDegree() {
  body.style.background = `linear-gradient(${range.value}deg)`;
  currentBackground.textContent = body.style.background + ';';
}

/*color_one.addEventListener('input', setGradient2);
color_two.addEventListener('input', setGradient2);*/

for (let i = 0; i < colorArr.length; i++) {
  colorArr[i].addEventListener('input', setGradient2);
}

range.addEventListener('input', setDegree);
