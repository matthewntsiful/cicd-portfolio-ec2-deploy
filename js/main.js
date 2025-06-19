document.addEventListener('DOMContentLoaded', function() {
    // Load all components
    document.getElementById('header-component').innerHTML = document.querySelector('template#header-template').content.cloneNode(true).firstElementChild.outerHTML;
    document.getElementById('hero-component').innerHTML = document.querySelector('template#hero-template').content.cloneNode(true).firstElementChild.outerHTML;
    document.getElementById('about-component').innerHTML = document.querySelector('template#about-template').content.cloneNode(true).firstElementChild.outerHTML;
    document.getElementById('experience-component').innerHTML = document.querySelector('template#experience-template').content.cloneNode(true).firstElementChild.outerHTML;
    document.getElementById('projects-component').innerHTML = document.querySelector('template#projects-template').content.cloneNode(true).firstElementChild.outerHTML;
    document.getElementById('contact-component').innerHTML = document.querySelector('template#contact-template').content.cloneNode(true).firstElementChild.outerHTML;
    document.getElementById('footer-component').innerHTML = document.querySelector('template#footer-template').content.cloneNode(true).firstElementChild.outerHTML;

    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Project card animations
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Form submission
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
        });
    }

    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        });
    }
});