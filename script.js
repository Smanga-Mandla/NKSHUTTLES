// 1. Get the "Back to Top" button element
const topButton = document.getElementById("topBtn");

// 2. Handle Scroll Events (Show button + Navbar effects)
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    // Show/Hide "Back to Top" button
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
}

// 3. Scroll to Top when clicked
topButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// 4. Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70, // Offset for the fixed header
                behavior: 'smooth'
            });
        }
    });
});

// 5. Contact Form Submission Alert
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert("Thank you! NK Shuttles will respond within our 30-minute turnaround time promise.");
        this.reset();
    });
}

const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-links');

// Toggle Mobile Menu
menu.addEventListener('click', function() {
    menuLinks.classList.toggle('active');
    
    // Optional: Change icon from bars to X
    const icon = menu.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(n => n.addEventListener('click', () => {
    menuLinks.classList.remove('active');
    document.querySelector('#mobile-menu i').classList.add('fa-bars');
    document.querySelector('#mobile-menu i').classList.remove('fa-times');
}));