const nameInputEl = document.querySelector("#name-input");
const nameOutputEl = document.querySelector("#name-output");

nameInputEl.addEventListener("input", onEnterNameInput);

function onEnterNameInput(event) {
  if (event.currentTarget.value === "") {
    nameOutputEl.textContent = "Anonymous";
  }
  nameOutputEl.textContent = event.currentTarget.value;
};


console.log(nameOutputEl);