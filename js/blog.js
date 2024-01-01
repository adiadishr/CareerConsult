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

  ScrollReveal().reveal(".banner-heading",{
    delay: 400,
    duration: 1400,
    origin: "bottom",
    distance: "200px",
    easing: "ease-in-out",
  });

  
  ScrollReveal().reveal(".banner p",{
    delay: 500,
    duration: 1400,
    origin: "bottom",
    distance: "200px",
    easing: "ease-in-out",
  });

  ScrollReveal().reveal(".banner",{
    delay: 200,
    duration: 1400,
  });

  ScrollReveal().reveal(".featured-article",{
    delay: 200,
    duration: 1400,
    origin: "bottom",
    distance: "200px",
    easing: "ease-in-out",
  });

  ScrollReveal().reveal(".right",{
    delay: 400,
    duration: 1400,
    origin: "bottom",
    distance: "200px",
    easing: "ease-in-out",
  });

  ScrollReveal().reveal(".catalog h1",{
    delay: 200,
    duration: 1400,
    origin: "bottom",
    distance: "200px",
    easing: "ease-in-out",
  });

  ScrollReveal().reveal(".entry",{
    delay: 0,
    duration: 1400,
    origin: "bottom",
    distance: "200px",
    easing: "ease-in-out",
    interval: "200"
  });

  ScrollReveal().reveal(".footer",{
    delay: 600,
    duration: 1400,
    easing: "ease-in-out",
  });