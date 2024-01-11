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

ScrollReveal().reveal(".filler h1", {
    delay: 200,
    duration: 1400,
    origin: "bottom",
    distance: "200px",
    easing: "ease-in-out",
});

ScrollReveal().reveal(".filler h2", {
    delay: 400,
    duration: 1400,
    origin: "bottom",
    distance: "200px",
    easing: "ease-in-out",
});

ScrollReveal().reveal(".filler p", {
    delay: 600,
    duration: 1400,
    origin: "bottom",
    distance: "200px",
    easing: "ease-in-out",
});

ScrollReveal().reveal(".filler .imageholder", {
    delay: 600,
    duration: 1400,
    origin: "bottom",
    distance: "200px",
    easing: "ease-in-out",
});

ScrollReveal().reveal(".contact-heading", {
    delay: 200,
    duration: 1400,
    origin: "bottom",
    distance: "200px",
    easing: "ease-in-out",
});

ScrollReveal().reveal(".contact-form", {
    delay: 400,
    duration: 1400,
    origin: "bottom",
    distance: "200px",
    easing: "ease-in-out",
});

ScrollReveal().reveal(".contact-details", {
    delay: 600,
    duration: 1400,
    origin: "bottom",
    distance: "200px",
    easing: "ease-in-out",
});


const scriptURL = 'https://script.google.com/macros/s/AKfycbzXiasQhmOCrdYXpRG_PFgJKrREBG5CLNGucz54qjNPzZlbhFEbqWre0THt1ngFY8Xo/exec'
const form = document.forms['contact-form']
document.getElementById("submit").addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => alert("Thank you! your form is submitted successfully."))
        .then(() => { window.location.reload(); })
        .catch(error => console.error('Error!', error.message))
})

React

Reply







