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

//fizjo change image on size

const fizjImg = document.querySelector('#fizjo');
window.addEventListener('resize', () => {
    if (window.innerWidth > 550) {
        fizjImg.src = './images/fizjo_cut.jpg'
    } else if (window.innerWidth < 550) {
        fizjImg.src = './images/fizjo_low.jpg'
    }
});

//footer time change
const footer = document.querySelector('.footer-bottom');
const year = new Date().getFullYear();

footer.innerHTML = `Copyright &copy; ${year} Mednova Centrum Medyczne`

//scroll link

const topArrow = document.querySelector('.top-link');

window.addEventListener('scroll', () => {
    const scrollHeight = window.pageYOffset;

    if (scrollHeight > 500) {
        topArrow.classList.add('show-top-link')
    } else if (scrollHeight < 500) {
        topArrow.classList.remove('show-top-link')
    }

})

topArrow.addEventListener('click', () => {
    window.scrollTo(0, 0)
})