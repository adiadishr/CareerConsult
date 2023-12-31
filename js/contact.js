function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

ScrollReveal().reveal("nav", {
    delay: 0,
    duration: 600,
    origin: "top",
    distance: "50px",
    easing: "ease",
    reset: true,
});

ScrollReveal().reveal(".footer", {
    delay: 300,
    duration: 1400,
    easing: "ease-in-out",
});

ScrollReveal().reveal(".contact-heading", {
    delay: 600,
    duration: 1400,
    origin: "bottom",
    distance: "200px",
    easing: "ease-in-out",
});

ScrollReveal().reveal(".contact-form", {
    delay: 800,
    duration: 1400,
    origin: "bottom",
    distance: "200px",
    easing: "ease-in-out",
});

ScrollReveal().reveal(".contact-details", {
    delay: 900,
    duration: 1400,
    origin: "bottom",
    distance: "200px",
    easing: "ease-in-out",
});
