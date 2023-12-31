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

ScrollReveal().reveal(".service-heading", {
    delay: 1,
    duration: 1000,
    easing: "ease-in-out",
    origin: "bottom",
    distance: "200px",
});

ScrollReveal().reveal(".column", {
    delay: 0,
    duration: 1000,
    easing: "ease-in-out",
    origin: "bottom",
    distance: "200px",
    interval: 200,
});

ScrollReveal().reveal(".team-heading h1, h2", {
    delay: 200,
    duration: 1200,
    easing: "ease-in-out",
    origin: "bottom",
    distance: "200px",
    interval: 200,
});

ScrollReveal().reveal(".team-cards .col", {
    delay: 400,
    duration: 1200,
    easing: "ease-in-out",
    origin: "bottom",
    distance: "200px",
    interval: 400,
});

ScrollReveal().reveal(".info", {
    delay: 100,
    duration: 1200,
    easing: "ease-in-out",
    origin: "bottom",
    distance: "200px",
    interval: 400,
});


