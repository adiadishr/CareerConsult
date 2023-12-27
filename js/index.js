function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

ScrollReveal().reveal("nav", { delay: 0, duration: 600, origin: 'top', distance: '10px', easing: 'ease' });
ScrollReveal().reveal(".subheadings", { delay: 400, duration: 1400, origin: 'left', distance: '100px',});
ScrollReveal().reveal(".footer", { delay: 500, duration: 1500, easing: 'ease-in-out', interval: 200});

