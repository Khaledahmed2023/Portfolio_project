// Advanced animations for the portfolio website

document.addEventListener('DOMContentLoaded', function() {
    // GSAP animations
    if (typeof gsap !== 'undefined') {
        // Hero section animation
        gsap.from(".intro_title", { 
            duration: 1.5, 
            y: 50, 
            opacity: 0, 
            ease: "power3.out",
            delay: 0.5
        });
        
        gsap.from(".intro_title_1", { 
            duration: 1.5, 
            y: 50, 
            opacity: 0, 
            ease: "power3.out",
            delay: 0.8
        });
        
        gsap.from(".intro_subtitle", { 
            duration: 1.5, 
            y: 50, 
            opacity: 0, 
            ease: "power3.out",
            delay: 1.1
        });
        
        gsap.from(".intro .button", { 
            duration: 1.5, 
            y: 50, 
            opacity: 0, 
            ease: "power3.out",
            delay: 1.4
        });
        
        gsap.from(".intro .social", { 
            duration: 1.5, 
            y: 50, 
            opacity: 0, 
            ease: "power3.out",
            delay: 1.7
        });
        
        gsap.from(".intro_illustration", { 
            duration: 2, 
            scale: 0.8, 
            opacity: 0, 
            ease: "power3.out",
            delay: 0.5
        });
        
        // Staggered section animations on scroll
        const sections = [
            "#about", 
            "#projects", 
            "#references", 
            "#contact"
        ];
        
        if (typeof ScrollTrigger !== 'undefined') {
            gsap.registerPlugin(ScrollTrigger);
            
            sections.forEach(section => {
                gsap.from(`${section} .section-header`, {
                    scrollTrigger: {
                        trigger: section,
                        start: "top 80%",
                    },
                    duration: 1,
                    y: 50,
                    opacity: 0,
                    ease: "power3.out"
                });
            });
        }
    }
    
    // Typing animation effect for sections that need it
    function setupTypingAnimation(element, text, speed = 50) {
        if (!element) return;
        
        element.textContent = '';
        element.style.width = 'auto';
        element.style.whiteSpace = 'nowrap';
        element.style.overflow = 'hidden';
        
        let i = 0;
        const typeEffect = setInterval(() => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(typeEffect);
            }
        }, speed);
    }
    
    // Init typing animations after preloader
    window.addEventListener('load', function() {
        setTimeout(() => {
            const titleElement = document.querySelector('.intro_title');
            if (titleElement) {
                const originalText = titleElement.textContent.trim();
                setupTypingAnimation(titleElement, originalText);
            }
        }, 1500);
    });
    
    // Subtle hover effects for buttons and links
    const interactiveElements = document.querySelectorAll('a:not(.nav-link), button:not(.nav-toggle)');
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            if (typeof gsap !== 'undefined') {
                gsap.to(this, {
                    scale: 1.05,
                    duration: 0.3,
                    ease: "power1.out"
                });
            }
        });
        
        element.addEventListener('mouseleave', function() {
            if (typeof gsap !== 'undefined') {
                gsap.to(this, {
                    scale: 1,
                    duration: 0.3,
                    ease: "power1.out"
                });
            }
        });
    });
});
