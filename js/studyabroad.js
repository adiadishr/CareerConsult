function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

ScrollReveal().reveal(".footer", {
  delay: 300,
  duration: 1400,
  easing: "ease-in-out",
});

ScrollReveal().reveal(".hero-container", {
  delay: 300,
  duration: 1400,
  easing: "ease-in-out",
});

ScrollReveal().reveal(".hero-heading", {
  delay: 300,
  duration: 1400,
  easing: "ease-in-out",
  origin: "bottom",
  distance: "200px",
});

ScrollReveal().reveal(".hero-text", {
  delay: 500,
  duration: 1400,
  easing: "ease-in-out",
  origin: "bottom",
  distance: "200px",
});

ScrollReveal().reveal(".container-one", {
    delay: 300,
    duration: 1400,
    easing: "ease-in-out",
    origin: "bottom",
    distance: "200px",
  });
