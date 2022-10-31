function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.body;
const colorEl = document.querySelector(".color");
const btnChangeColorEl = document.querySelector(".change-color");

btnChangeColorEl.addEventListener("click", () => {
  colorEl.innerHTML = getRandomHexColor();
  body.style.backgroundColor = colorEl.innerHTML;
});
