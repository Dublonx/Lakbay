// Lakbay
const menu = document.querySelector('#menu');
const nav = document.querySelector('#nav');
const body = document.body;

menu.addEventListener("click", () => {
    nav.classList.toggle("active");

    // changed icon
    if (nav.classList.contains("active")) {
        menu.className = "fa-solid fa-xmark";
    } else {
        menu.className = "fa-solid fa-bars";
    }
    
    // if active - no scroll
    body.classList.toggle("no-scroll");
});

// close navbar
const links = document.querySelectorAll('.link');

links.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");

        menu.className = "fa-solid fa-bars";
        
        // if inactive - removed overflow
        body.classList.remove("no-scroll");
    });
});

// AOS scroll animation
AOS.init();

// back to top
const topCta = document.querySelector('#tCta');

window.addEventListener("scroll", () => {
    // if
    if (window.scrollY > 300) {
        topCta.classList.add("show");
    } else {
        topCta.classList.remove("show");
    }
});

topCta.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// booking page
const bookCta = document.querySelector('#bookCta');
const booking = document.querySelector('#popupBooking');
const bookXmark = document.querySelector('.close');

bookCta.addEventListener("click", () => {
    booking.classList.add("popup");
});

bookXmark.addEventListener("click", () => {
    booking.classList.remove("popup");
});
