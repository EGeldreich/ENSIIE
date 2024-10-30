
// GET ELEMENTS
const headerEL = document.querySelector('.header');

// STARTING VARIABLES
let lastScrollTop = 0;

// FUNCTIONS

const currentScroll = () => {
    let currentScroll = window.scrollY;
    headerEL.classList.toggle('hide-header', currentScroll > lastScrollTop && currentScroll >= 50);
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
};

// EVENTS

window.addEventListener('scroll', currentScroll);

//