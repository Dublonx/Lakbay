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
    
    // active - no scroll
    // inactive - yes scroll
    if (nav.classList.contains("active")) {
        body.style.overflow = "hidden";
    } else {
        body.style.overflow = "";
    }
});

// close navbar
const links = document.querySelectorAll('.link');

links.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");

        menu.className = "fa-solid fa-bars";
    });
});
