document.addEventListener('DOMContentLoaded', () => {

    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const closeMenu = document.querySelector('.close-menu');
    const navLinks = document.querySelector('.nav-links');
    const dropdowns = document.querySelectorAll('.nav-dropdown');

    hamburgerMenu.addEventListener('click', () => {
        navLinks.classList.add('open');
    });

    closeMenu.addEventListener('click', () => {
        navLinks.classList.remove('open');
    });

    dropdowns.forEach(dropdown => {
        const button = dropdown.querySelector('a, button');
        button.addEventListener('click', () => {
            dropdown.classList.toggle('open');
        });
    });

    document.addEventListener('click', (event) => {
        if (!navLinks.contains(event.target) && !hamburgerMenu.contains(event.target)) {
            navLinks.classList.remove('open');
        }
    });

})