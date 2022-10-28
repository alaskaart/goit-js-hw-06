let counterValue = 0;

const valueEl = document.querySelector("#value");
const decrementBtn = document.querySelector('[data-action = "decrement"]');
const incrementBtn = document.querySelector('[data-action = "increment"]');

function onDecrementClick() {
    valueEl.textContent = counterValue -= 1;
}

decrementBtn.addEventListener("click", onDecrementClick);

function onincrementClick() {
  valueEl.textContent = counterValue += 1;
}

incrementBtn.addEventListener("click", onincrementClick);