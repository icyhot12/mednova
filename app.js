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
