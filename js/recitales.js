// POP-UP
let popUp = document.querySelector(".pop-up");
let button = document.getElementById("cross");

button.addEventListener("click",()=> {
    popUp.classList.add("hidden");
});

// SLIDER
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

// CALENDARIO
document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendario');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        plugins: ['dayGrid'],
        locale: 'es',
        events: [
            {
                title: 'Pink Floyd',
                start: '2023-11-22',
                end: '2023-11-23',
            },
            {
                title: 'Tan Bionica',
                start: '2023-11-29',
                end: '2023-11-30',
            },
            {
                title: 'Taylor Swift',
                start: '2023-12-3',
                end: '2023-12-4',
            },
            {
                title: 'Red Hot Chili Peppers',
                start: '2023-12-15',
                end: '2023-12-16',
            },
        ],
    });

    calendar.render();
});
