const navBar = document.querySelector('.nav');
const navButton = document.querySelector('.nav-toggle');

navButton.addEventListener('click', toggleNavigation);

function toggleNavigation() {
    if (navBar.classList.contains('is-open')) {
        navBar.classList.remove('is-open');
    } else {
        navBar.classList.add('is-open');
    }
}
