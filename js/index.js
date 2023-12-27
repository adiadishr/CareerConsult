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
  reset: true
});

ScrollReveal().reveal(".subheadings", {
  delay: 200,
  duration: 1400,
  origin: "left",
  distance: "100px",
});

ScrollReveal().reveal(".intro", {
  delay: 400,
  duration: 1400,
  easing: "ease-in-out",
  interval: 200,
  origin: "bottom",
  distance: "100px",
});
ScrollReveal().reveal(".rightside", {
  delay: 400,
  duration: 2000,
  easing: "ease-in-out",
});

ScrollReveal().reveal(".footer", {
  delay: 500,
  duration: 1000,
  easing: "ease-in-out",
  interval: 200,
  reset: true
});
