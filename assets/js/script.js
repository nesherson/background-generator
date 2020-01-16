var currentBackground = document.querySelector("h3");
var color_one = document.querySelector(".input-color-one");
var color_two = document.querySelector(".input-color-two");
var body = document.querySelector("body");

function setGradient() {
  body.style.background =
    "linear-gradient(to right, " +
    color_one.value +
    ", " +
    color_two.value +
    ")";

  currentBackground.textContent = body.style.background + ";";
}

color_one.addEventListener("input", setGradient);

color_two.addEventListener("input", setGradient);
