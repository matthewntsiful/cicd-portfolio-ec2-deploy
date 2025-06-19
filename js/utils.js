/**
 * Load HTML component into a container element
 * @param {string} containerId - The ID of the container element
 * @param {string} componentPath - The path to the component HTML file
 */
function loadComponent(containerId, componentPath) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    fetch(componentPath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to load component: ${componentPath}`);
            }
            return response.text();
        })
        .then(html => {
            container.innerHTML = html;
        })
        .catch(error => {
            console.error(error);
        });
}

/**
 * Animate elements when they enter the viewport
 * @param {string} selector - CSS selector for elements to animate
 * @param {string} animationClass - CSS class to add for animation
 */
function animateOnScroll(selector, animationClass) {
    const elements = document.querySelectorAll(selector);
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add(animationClass);
            }
        });
    }, { threshold: 0.1 });
    
    elements.forEach(element => {
        observer.observe(element);
    });
}

/**
 * Validate form input
 * @param {HTMLInputElement} input - The input element to validate
 * @returns {boolean} - Whether the input is valid
 */
function validateInput(input) {
    if (input.type === 'email') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(input.value);
    }
    
    return input.value.trim() !== '';
}