let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let sections = document.querySelectorAll("section"); // Changed from 'section' to 'sections'
let navLinks = document.querySelectorAll("header nav a");

// Scroll event for updating active nav link
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector(`header nav a[href*='${id}']`).classList.add('active');

            });
        }
    });
};

// Toggle menu/navbar on menu icon click
menuIcon.onclick = () => {  // Corrected from onClick to onclick
    menuIcon.classList.toggle('bx-x'); // Toggle 'bx-x' class on menu icon
    navbar.classList.toggle('active'); // Toggle 'active' class on navbar
};
