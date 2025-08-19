const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});
navLinks.addEventListener("click",(e)=>{
    navLinks.classList.remove("open")
    menuBtnIcon.setAttribute("class","ri-menu-line");
    document.body.classList.toggle("menu-open");
});
const navSearch = document.getElementById("nav-search");

navSearch.addEventListener("click", (e) => {
  navSearch.classList.toggle("open");
});
//swiper

  const swiper = new Swiper('.swiper', {
    loop: true, 
    autoplay: {
      delay: 700,
      disableOnInteraction: false,
    },
    slidesPerView: 1, 
    spaceBetween: 20, 
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2, 
      },
      1024: {
        slidesPerView: 3, 
      },
    },
  });

window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("transparent");
  } else {
    navbar.classList.remove("transparent");
  }
});

/*

const scrollRevealOption = {
  distance:"500px",
  origin:"bottom",
  duration:500,
  delay:300,
  easing:'ease-in-out',
  reset: true,
}
ScrollReveal().reveal(".header-image img",{
  ...scrollRevealOption,
  origin:"right",
  easing:'ease-in-out',
});
ScrollReveal().reveal(".header-content div",{
 duration:"500",
 delay:200,
 easing:'ease-in-out',
});
ScrollReveal().reveal(".header-content h1",{
 ...scrollRevealOption,
 duration:500,
 delay:200,
 easing:'ease-in-out',
});
ScrollReveal().reveal(".header-content p",{
 ...scrollRevealOption,
 duration:500,
 delay:200,
 easing:'ease-in-out',
});

ScrollReveal().reveal(".deals-card h2",{
 ...scrollRevealOption,
 delay:200,
 easing:'ease-in-out',
});
ScrollReveal().reveal(".deals-card h4",{
 ...scrollRevealOption,
 delay:200,
});
ScrollReveal().reveal(".deals-card p",{
 ...scrollRevealOption,
 interval:200,
 easing:'ease-in-out',
});
ScrollReveal().reveal(".about-image img",{
  ...scrollRevealOption,
  origin:"right",
  easing:'ease-in-out',
});
ScrollReveal().reveal(".about-card",{
 duration:"500",
 interval:250,
 delay:200,
});

ScrollReveal().reveal(".product-card img",{
  ...scrollRevealOption,
  origin:"right",
  easing:'ease-in-out',
});
ScrollReveal().reveal(".product-card h4 p",{
 duration:"500",
 delay:200,
 easing:'ease-in-out',
});

ScrollReveal().reveal("section-header h2",{
  ...scrollRevealOption,
  origin:"right",
  easing:'ease-in-out',
});
ScrollReveal().reveal("section-description p",{
 duration:"500",
 delay:200,
 easing:'ease-in-out',
});
ScrollReveal().reveal("footer div",{
  ...scrollRevealOption,
  origin:"right",
  easing:'ease-in-out',
});

ScrollReveal().reveal(".footer-logo  a p",{
 duration:"500",
 delay:300,
 easing:'ease-in-out',
});
*/

  const baseReveal = {
    distance: "100px", 
    duration: 1200,  
    delay: 200,
    easing: 'ease-in-out',
    reset: true
  };

  // Detect device width
  const isMobile = window.innerWidth <= 768;

  // my Header
  ScrollReveal().reveal(".header-image img", {
    ...baseReveal,
    origin: isMobile ? "bottom" : "right",
    distance: isMobile ? "60px" : "120px"
  });

  ScrollReveal().reveal(".header-content div", {
    ...baseReveal,
    origin: isMobile ? "top" : "left",
    delay: 300
  });

  ScrollReveal().reveal(".header-content h1", {
    ...baseReveal,
    origin: "top",
    delay: 400
  });

  ScrollReveal().reveal(".header-content p", {
    ...baseReveal,
    origin: "bottom",
    delay: 500
  });

  // my section
  ScrollReveal().reveal(".deals-card h2", {
    ...baseReveal,
    origin: "left",
    interval: 150
  });
  ScrollReveal().reveal(".deals-card h4", {
    ...baseReveal,
    origin: "right",
    interval: 150
  });
  ScrollReveal().reveal(".deals-card p", {
    ...baseReveal,
    origin: "bottom",
    interval: 200
  });

  // this is section
  ScrollReveal().reveal(".about-image img", {
    ...baseReveal,
    origin: isMobile ? "bottom" : "right"
  });
  ScrollReveal().reveal(".about-card", {
    ...baseReveal,
    interval: 250,
    origin: isMobile ? "top" : "left"
  });

  // this is Product section
  ScrollReveal().reveal(".product-card img", {
    ...baseReveal,
    origin: isMobile ? "bottom" : "right"
  });
  ScrollReveal().reveal(".product-card h4, .product-card p", {
    ...baseReveal,
    origin: "top",
    delay: 300
  });

  // this is Section headers
  ScrollReveal().reveal(".section-header h2", {
    ...baseReveal,
    origin: isMobile ? "top" : "left",
    delay: 200
  });
  ScrollReveal().reveal(".section-description p", {
    ...baseReveal,
    origin: isMobile ? "bottom" : "right",
    delay: 300
  });

  // my Footer
  ScrollReveal().reveal("footer div", {
    ...baseReveal,
    origin: isMobile ? "top" : "right"
  });
  ScrollReveal().reveal(".footer-logo a p", {
    ...baseReveal,
    delay: 400,
    origin: "bottom"
  });

