function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.body;
const colorEl = document.querySelector(".color");
const btnChangeColorEl = document.querySelector(".change-color");

btnChangeColorEl.addEventListener("click", () => {
  body.style.backgroundColor = getRandomHexColor();
  colorEl.innerHTML = getRandomHexColor();
});