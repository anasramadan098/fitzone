// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const nav = document.querySelector('header nav');
    const body = document.body;
    
    if (menuIcon && nav) {
        menuIcon.addEventListener('click', function() {
            nav.classList.toggle('active');
            body.classList.toggle('menu-open');
        });
        
        // Close menu when clicking on nav links
        const navLinks = document.querySelectorAll('header nav a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                nav.classList.remove('active');
                body.classList.remove('menu-open');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!nav.contains(e.target) && !menuIcon.contains(e.target)) {
                nav.classList.remove('active');
                body.classList.remove('menu-open');
            }
        });
    }
});

// Smooth Scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// FAQ Accordion functionality
const questions = document.querySelectorAll('.questions .container');
if (questions.length > 0) {
    questions.forEach(question => {
        question.addEventListener('click', () => {
            question.classList.toggle('active');
            const icon = question.querySelector('.end i');
            const answer = question.querySelector('.answer');
            
            if (icon) icon.classList.toggle('active');
            
            if (answer) {
                if (question.classList.contains('active')) {
                    answer.style.maxHeight = answer.scrollHeight + "px";
                } else {
                    answer.style.maxHeight = 0;
                }
            }
        });
    });
}

// Steps interaction
const steps = document.querySelectorAll('.steps li');
const stepImg = document.querySelector('.step-img');

if (steps.length > 0 && stepImg) {
    const stepsContent = {
        0: {
            "title": "Select First Match",
            "src": 'imgs/step-1.png'
        },
        1: {
            "title": "Select Match",
            "src": 'imgs/step-1.png'
        },
        2: {
            "title": "Select First",
            "src": 'imgs/step-1.png'
        },
        3: {
            "title": "Select First Match",
            "src": 'imgs/step-1.png'
        },
        4: {
            "title": "Select First Match",
            "src": 'imgs/step-1.png'
        },
        5: {
            "title": "Select First Match",
            "src": 'imgs/step-1.png'
        }
    };

    steps.forEach((step, i) => {
        step.addEventListener('click', () => {
            // Change Class
            steps.forEach(s => s.classList.remove('active'));
            step.classList.add('active');

            // Opacity 0
            stepImg.style.opacity = 0;
            
            // Change Content
            const h3 = stepImg.querySelector('h3');
            const img = stepImg.querySelector('img');
            
            if (h3 && stepsContent[i]) h3.textContent = stepsContent[i].title;
            if (img && stepsContent[i]) img.src = stepsContent[i].src;

            // Opacity 1
            setTimeout(() => {
                stepImg.style.opacity = 1;
            }, 150);
        });

        if (i === 0) {
            step.click();
        }
    });
}

// Scroll to top functionality
const upButton = document.querySelector('.up');
if (upButton) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            upButton.style.display = 'block';
        } else {
            upButton.style.display = 'none';
        }
    });
    
    upButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Form validation helper
function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.style.borderColor = '#dc3545';
            isValid = false;
        } else {
            input.style.borderColor = '';
        }
    });
    
    return isValid;
}

// Add form validation to all forms
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function(e) {
        if (!validateForm(this)) {
            e.preventDefault();
            alert('Please fill in all required fields');
        }
    });
});

// Language switcher dropdown functionality
const langSwitcher = document.querySelector('.lang-switcher');
if (langSwitcher) {
    const selectedLang = langSwitcher.querySelector('.selected-lang');
    const langMenu = langSwitcher.querySelector('.lang-menu');
    
    if (selectedLang && langMenu) {
        selectedLang.addEventListener('click', function(e) {
            e.stopPropagation();
            langMenu.classList.toggle('show');
        });
        
        document.addEventListener('click', function() {
            langMenu.classList.remove('show');
        });
    }
}

// Intersection Observer for animations
if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // Observe elements for animation
    document.querySelectorAll('.card, .box, .stats').forEach(el => {
        observer.observe(el);
    });
}

// Admin Dashboard Tab Switching
document.querySelectorAll('.nav-link[data-tab]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Remove active class from all nav links
        document.querySelectorAll('.nav-link').forEach(navLink => navLink.classList.remove('active'));
        
        // Add active class to clicked link
        e.target.classList.add('active');
        
        // Hide all tab contents
        document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
        
        // Show corresponding tab content
        const targetTab = e.target.getAttribute('data-tab');
        const targetContent = document.getElementById(targetTab + '-content');
        if (targetContent) {
            targetContent.classList.add('active');
        }
    });
});

// Mobile sidebar toggle for admin dashboard
const sidebarToggle = document.querySelector('.sidebar-toggle');
const sidebar = document.querySelector('.sidebar');
if (sidebarToggle && sidebar) {
    sidebarToggle.addEventListener('click', () => {
        sidebar.classList.toggle('show');
    });
}

console.log('FitZone: Main JavaScript loaded successfully');