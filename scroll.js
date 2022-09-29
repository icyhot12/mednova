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