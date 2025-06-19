/**
 * Animations functionality
 */
document.addEventListener('DOMContentLoaded', function() {
    // Wait for components to load
    setTimeout(() => {
        // Animate elements when they enter the viewport
        animateOnScroll('.skill', 'animate__fadeIn');
        animateOnScroll('.stat-card', 'animate__fadeInUp');
        animateOnScroll('.timeline-item', 'animate__fadeInUp');
        animateOnScroll('.project-card', 'animate__fadeInUp');
        
        // Project card hover animations
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px)';
                this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = 'var(--shadow)';
            });
        });
        
        // Skill card hover animations
        const skillCards = document.querySelectorAll('.skill');
        skillCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-5px)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
            });
        });
        
        // Stat card hover animations
        const statCards = document.querySelectorAll('.stat-card');
        statCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px)';
                this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.1)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = 'var(--shadow)';
            });
        });
    }, 1000);
});