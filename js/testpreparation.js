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

ScrollReveal().reveal(".testprep-heading", {
  delay: 200,
  duration: 1400,
  origin: "bottom",
  distance: "200px",
  easing: "ease-in-out",
});

ScrollReveal().reveal(".sub-left", {
  delay: 200,
  duration: 1400,
  origin: "bottom",
  distance: "200px",
  easing: "ease-in-out",
  interval: 400
});

ScrollReveal().reveal(".sub-right", {
  delay: 400,
  duration: 1400,
  origin: "bottom",
  distance: "200px",
  easing: "ease-in-out",
  interval: 400
});

ScrollReveal().reveal(".tab-heading h1 ", {
  delay: 600,
  duration: 1400,
  origin: "bottom",
  distance: "200px",
  easing: "ease-in-out",
});

ScrollReveal().reveal(".container", {
  delay: 600,
  duration: 1400,
  origin: "bottom",
  distance: "200px",
  easing: "ease-in-out",
});

ScrollReveal().reveal(".footer", {
  delay: 600,
  duration: 1400,
  easing: "ease-in-out",
});

const allIndicator = document.querySelectorAll('.indicator li');
const allContent = document.querySelectorAll('.content li');

allIndicator.forEach(item=> {
  item.addEventListener('click', function () {
    const content = document.querySelector(this.dataset.target);

    allIndicator.forEach(i=> {
      i.classList.remove('active');
    })

    allContent.forEach(i=> {
      i.classList.remove('active');
    })

    content.classList.add('active');
    this.classList.add('active');
  })
})