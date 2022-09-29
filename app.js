// navbar logic 
const toggleBtn = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelector('.links');

toggleBtn.addEventListener('click', () => {
    navLinks.classList.toggle('show-links');

    if (links.classList.contains('show-links-direction')) {
        setTimeout(() => {
            links.classList.remove('show-links-direction');
        }, 1000);
    } else {
        links.classList.add('show-links-direction')
    }
});

window.addEventListener('resize', (e) => {
    if (window.innerWidth > 1225) {
        navLinks.classList.remove('show-links')
        links.classList.remove('show-links-direction')
    }
})

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

//fizjo change image on size

const fizjImg = document.querySelector('#fizjo');
window.addEventListener('resize', () => {
    if (window.innerWidth > 550) {
        fizjImg.src = './images/fizjo_cut.jpg'
    } else if (window.innerWidth < 550) {
        fizjImg.src = './images/fizjo_low.jpg'
}});