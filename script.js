// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Modal Pop-up for Portfolio Items
const portfolioItems = document.querySelectorAll('.portfolio-item');
const projectPages = document.querySelectorAll('.project-page');
const closeButtons = document.querySelectorAll('.close-btn');

portfolioItems.forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetPage = document.getElementById(targetId);
        if (targetPage) {
            targetPage.style.display = 'flex';
            document.body.style.overflow = 'hidden'; // Prevents background scroll
        }
    });
});

closeButtons.forEach(button => {
    button.addEventListener('click', function() {
        this.closest('.project-page').style.display = 'none';
        document.body.style.overflow = 'auto'; // Re-enables background scroll
    });
});

// Close modal when clicking outside of the content
projectPages.forEach(page => {
    page.addEventListener('click', function(e) {
        if (e.target === this) {
            this.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});

// A basic contact form handler
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message! I will get back to you shortly.');
    this.reset();
});