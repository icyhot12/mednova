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

footer.innerHTML = `Copyright &copy; ${year} Mednova Centrum Medyczne`;
