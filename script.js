const navBar = document.querySelector('.nav');
const navButton = document.querySelector('.nav-toggle');
const header = document.getElementById('header');

// Toggle navigation when navButton is clicked
navButton.addEventListener('click', toggleNavigation);

// Function to toggle navigation bar visibility
function toggleNavigation() {
    if (navBar.classList.contains('is-open')) {
        navBar.classList.remove('is-open');
    } else {
        navBar.classList.add('is-open');
    }
}

// Close navigation when clicking outside of it
document.addEventListener('click', function(event) {
    const isClickInsideNav = navBar.contains(event.target);
    const isClickOnNavToggle = navButton.contains(event.target);

    if (!isClickInsideNav && !isClickOnNavToggle) {
        navBar.classList.remove('is-open');
    }
});

// Function to handle header position on scroll
window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        header.style.position = "fixed";
        header.style.top = "0";
        header.style.width = "100%";
    } else {
        header.style.position = "absolute";
        header.style.top = "auto";
        header.style.width = "auto";
    }
}
