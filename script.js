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
document.addEventListener('click', function (event) {
    const isClickInsideNav = navBar.contains(event.target);
    const isClickOnNavToggle = navButton.contains(event.target);

    if (!isClickInsideNav && !isClickOnNavToggle) {
        navBar.classList.remove('is-open');
    }
});

// Function to handle header position on scroll
window.onscroll = function () {
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

// Function for sending contact form to google sheet //

const scriptURL = 'https://script.google.com/macros/s/AKfycbz-9FFnoJhw9LfkRgT34DkAhwgkIueGD8vuT_-LO-gfRcdnT9xai3ksvzDTybEMRgpIqg/exec';
const form = document.forms['submit-to-google-sheet'];

// Function to display a message
function showMessage(message) {
    alert(message);
}

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            if (response.ok) {
                console.log('Form submission successful');

                showMessage('Your message has been sent successfully!');

            } else {
                console.error('Form submission failed with status:', response.status);

                showMessage('Failed to send message. Please try again later.');
            }
        })
        .catch(error => {
            console.error('Error submitting form:', error);

            showMessage('An error occurred while submitting the form. Please try again later.');
        });
});