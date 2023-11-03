// POP-UP
let popUp = document.querySelector(".pop-up");
let button = document.getElementById("cross");

button.addEventListener("click",()=> {
    popUp.classList.add("hidden");
})