document.addEventListener('DOMContentLoaded', function() {
    // Initialize navigation elements
    const navBar = document.querySelector('.nav');
    const navButton = document.querySelector('.nav-toggle');
    
    // Toggle navigation when navButton is clicked
    navButton.addEventListener('click', function() {
        navBar.classList.toggle('is-open');
    });
    
    // Close navigation when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideNav = navBar.contains(event.target);
        const isClickOnNavToggle = navButton.contains(event.target);
        
        if (!isClickInsideNav && !isClickOnNavToggle && navBar.classList.contains('is-open')) {
            navBar.classList.remove('is-open');
        }
    });
    
    // Back to top button
    const backToTopButton = document.getElementById('backToTop');
    
    window.addEventListener('scroll', function() {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });
    
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Dark mode toggle
    const darkModeToggle = document.getElementById('darkModeToggle');
    
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
    }
    
    darkModeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
        } else {
            localStorage.setItem('darkMode', 'disabled');
        }
    });
    
    // Improved form submission handler
    const form = document.forms['submit-to-google-sheet'];
    const formStatus = document.getElementById('form-status');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show a loading state
            const submitButton = form.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;
            
            // Simulate form submission (replace with actual API call)
            setTimeout(() => {
                // Success feedback
                if (formStatus) {
                    formStatus.className = 'form-status success';
                    formStatus.innerHTML = '<i class="fas fa-check-circle"></i> Your message has been sent successfully!';
                }
                
                // Reset the form
                form.reset();
                
                // Restore button state
                submitButton.textContent = originalText;
                submitButton.disabled = false;
                
                // Hide success message after 5 seconds
                setTimeout(() => {
                    formStatus.style.display = 'none';
                }, 5000);
            }, 1500);
        });
    }
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href') !== '#') {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                document.querySelector(targetId).scrollIntoView({
                    behavior: 'smooth'
                });
                
                // Close navigation if it's open
                if (navBar.classList.contains('is-open')) {
                    navBar.classList.remove('is-open');
                }
            }
        });
    });
});