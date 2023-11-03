// POP-UP
let popUp = document.querySelector(".pop-up");
let button = document.getElementById("cross");

button.addEventListener("click",()=> {
    popUp.classList.add("hidden");
});

const slider = document.querySelector('.recitales_slider_inner');
const images = slider.querySelectorAll('img');
let index = 0;

function nextSlide() {
    index = (index + 1) % images.length;
    updateSlider();
}

function prevSlide() {
    index = (index - 1 + images.length) % images.length;
    updateSlider();
}

function updateSlider() {
    const percentage = index * -100;
    slider.style.transform = `translateX(${percentage}%)`;
}

setInterval(nextSlide, 3000); 

