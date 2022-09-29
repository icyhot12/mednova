// about image change

const images = [
    "./images/alicja_prezes.jpg",
    "./images/witold.jpg",
    "./images/morawiecki.jpg"
];

let slideIndex = 0;
const imgCont = document.querySelector('.small-img');

function plusSlides(n) {
    slideIndex += n
    if (slideIndex > 2 ) {
        slideIndex = 0
    } else if (slideIndex < 0) {
        slideIndex = 2
    }
    imgCont.src = images[slideIndex]
};  