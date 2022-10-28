const fontSizeСontrolEl = document.querySelector("#font-size-control");
const nextEl = document.querySelector("#text");

fontSizeСontrolEl.addEventListener("input", changeFontSize);

function changeFontSize(event) {
    console.log((nextEl.style.fontSize = event.currentTarget.value + "px"));
}