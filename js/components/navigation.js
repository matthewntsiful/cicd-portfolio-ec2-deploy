/**
 * Navigation functionality
 */
document.addEventListener('DOMContentLoaded', function() {
    // Wait for header component to load
    setTimeout(() => {
        const menuToggle = document.querySelector('.menu-toggle');
        const navLinks = document.querySelector('.nav-links');
        
        if (menuToggle && navLinks) {
            // Mobile menu toggle
            menuToggle.addEventListener('click', function() {
                if (navLinks.style.display === 'flex') {
                    navLinks.style.display = 'none';
                } else {
                    navLinks.style.display = 'flex';
                    navLinks.style.flexDirection = 'column';
                    navLinks.style.position = 'absolute';
                    navLinks.style.top = '80px';
                    navLinks.style.right = '0';
                    navLinks.style.backgroundColor = 'white';
                    navLinks.style.width = '100%';
                    navLinks.style.padding = '20px';
                    navLinks.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
                }
            });
            
            // Close mobile menu when clicking outside
            document.addEventListener('click', function(event) {
                const isClickInside = navLinks.contains(event.target) || menuToggle.contains(event.target);
                
                if (!isClickInside && window.innerWidth <= 768 && navLinks.style.display === 'flex') {
                    navLinks.style.display = 'none';
                }
            });
            
            // Reset nav display on window resize
            window.addEventListener('resize', function() {
                if (window.innerWidth > 768) {
                    navLinks.style.display = 'flex';
                    navLinks.style.flexDirection = '';
                    navLinks.style.position = '';
                    navLinks.style.top = '';
                    navLinks.style.right = '';
                    navLinks.style.backgroundColor = '';
                    navLinks.style.width = '';
                    navLinks.style.padding = '';
                    navLinks.style.boxShadow = '';
                } else {
                    navLinks.style.display = 'none';
                }
            });
            
            // Active link highlighting
            const sections = document.querySelectorAll('section');
            const navItems = document.querySelectorAll('.nav-links a');
            
            window.addEventListener('scroll', function() {
                let current = '';
                
                sections.forEach(section => {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.clientHeight;
                    
                    if (pageYOffset >= sectionTop - 200) {
                        current = section.getAttribute('id');
                    }
                });
                
                navItems.forEach(item => {
                    item.classList.remove('active');
                    if (item.getAttribute('href').substring(1) === current) {
                        item.classList.add('active');
                    }
                });
            });
        }
    }, 500);
});