const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener('blur', checkValidation);

function checkValidation(event) {
  if (event.target.value.length == inputEl.getAttribute("data-length")) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");
  }
};

console.log(inputEl);
