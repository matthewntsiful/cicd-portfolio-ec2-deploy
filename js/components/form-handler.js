/**
 * Form handling functionality
 */
document.addEventListener('DOMContentLoaded', function() {
    // Wait for contact component to load
    setTimeout(() => {
        const contactForm = document.getElementById('contactForm');
        
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Get form inputs
                const nameInput = document.getElementById('name');
                const emailInput = document.getElementById('email');
                const subjectInput = document.getElementById('subject');
                const messageInput = document.getElementById('message');
                
                // Validate inputs
                let isValid = true;
                
                if (!validateInput(nameInput)) {
                    highlightInvalidInput(nameInput);
                    isValid = false;
                } else {
                    resetInputHighlight(nameInput);
                }
                
                if (!validateInput(emailInput)) {
                    highlightInvalidInput(emailInput);
                    isValid = false;
                } else {
                    resetInputHighlight(emailInput);
                }
                
                if (!validateInput(subjectInput)) {
                    highlightInvalidInput(subjectInput);
                    isValid = false;
                } else {
                    resetInputHighlight(subjectInput);
                }
                
                if (!validateInput(messageInput)) {
                    highlightInvalidInput(messageInput);
                    isValid = false;
                } else {
                    resetInputHighlight(messageInput);
                }
                
                // If form is valid, submit it
                if (isValid) {
                    // In a real application, you would send the form data to a server here
                    // For now, we'll just show a success message
                    alert('Thank you for your message! I will get back to you soon.');
                    contactForm.reset();
                }
            });
        }
    }, 1000);
});

/**
 * Highlight invalid input
 * @param {HTMLInputElement} input - The input element to highlight
 */
function highlightInvalidInput(input) {
    input.style.borderColor = 'red';
    
    // Add error message if it doesn't exist
    const errorId = `${input.id}-error`;
    if (!document.getElementById(errorId)) {
        const errorMsg = document.createElement('div');
        errorMsg.id = errorId;
        errorMsg.className = 'error-message';
        errorMsg.style.color = 'red';
        errorMsg.style.fontSize = '0.8rem';
        errorMsg.style.marginTop = '5px';
        errorMsg.textContent = 'This field is required';
        
        if (input.type === 'email' && input.value.trim() !== '') {
            errorMsg.textContent = 'Please enter a valid email address';
        }
        
        input.parentNode.appendChild(errorMsg);
    }
}

/**
 * Reset input highlight
 * @param {HTMLInputElement} input - The input element to reset
 */
function resetInputHighlight(input) {
    input.style.borderColor = 'var(--gray)';
    
    // Remove error message if it exists
    const errorId = `${input.id}-error`;
    const errorMsg = document.getElementById(errorId);
    if (errorMsg) {
        errorMsg.remove();
    }
}