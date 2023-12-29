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

ScrollReveal().reveal(".container-one-heading", {
  delay: 0,
  duration: 1000,
  easing: "ease-in-out",
  origin: "bottom",
  distance: "200px",
});

ScrollReveal().reveal(".sub-container", {
  delay: 200,
  duration: 1000,
  easing: "ease-in-out",
  origin: "bottom",
  distance: "200px",
  interval: 200,
});

ScrollReveal().reveal("#verticalbanner", {
  delay: 400,
  duration: 1500,
  easing: "ease-in-out",
});

ScrollReveal().reveal(".content", {
    delay: 400,
    duration: 1500,
    easing: "ease-in-out",
    interval: 200,
    origin: "bottom",
    distance: "200px"
  });
