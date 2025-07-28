// Referencias
const nav = document.querySelector("header nav.c-navigation");
const navMobile = document.querySelector("header nav.c-navigation-mobile");
const navBtn = document.querySelector(
  "nav.c-navigation-mobile .c-navigation-mobile__button button"
);
const navWrapper = document.querySelector(
  "nav.c-navigation-mobile .c-navigation-mobile__button"
);
const navItems = document.querySelector(
  "nav.c-navigation-mobile .c-navigation-mobile__items"
);
const navOverlay = document.querySelector(
  "nav.c-navigation-mobile .c-navigation-mobile__overlay"
);

// Toggle del menú mobile
navBtn.addEventListener("click", () => {
  navWrapper.classList.toggle("c-navigation-mobile__button--active");
  navItems.classList.toggle("c-navigation-mobile__items--active");
  navOverlay.classList.toggle("c-navigation-mobile__overlay--active");

  navOverlay.addEventListener("click", () => {
    navWrapper.classList.remove("c-navigation-mobile__button--active");
    navItems.classList.remove("c-navigation-mobile__items--active");
    navOverlay.classList.remove("c-navigation-mobile__overlay--active");
  });

  const links = document.querySelectorAll(
    ".c-navigation-mobile .c-navigation-mobile__items li a"
  );
  const labels = [
    "Inicio",
    "Nuestro Trabajo",
    "Servicios",
    "Calidad",
    "Artículos",
    "Sobre Nosotros",
    "Contácto",
  ];
  labels.forEach((text, i) => {
    if (links[i]) links[i].innerHTML = text;
  });
});

// Mostrar/Ocultar header on scroll
let lastScrollY = window.scrollY;
window.addEventListener("scroll", () => {
  const currentY = window.scrollY;
  const down = currentY > lastScrollY;

  if (nav) {
    nav.style.top = down ? "-100px" : "0";
    nav.style.boxShadow =
      currentY === 0 ? "0 0 0 transparent" : "0 5px 15px rgba(1,33,51,.1)";
  }
  if (navMobile) {
    navMobile.style.top = down ? "-100px" : "0";
    navMobile.style.boxShadow =
      currentY === 0 ? "0 0 0 transparent" : "0 5px 15px rgba(1,33,51,.1)";
  }

  lastScrollY = currentY;
});

let cards = document.querySelectorAll(".c-card a");

cards.forEach((el) => {
  el.addEventListener("mouseenter", () => {
    el.style.background = "#eff3f5";
    el.style.transition = ".1s background-color ease-out";
  });

  el.addEventListener("mouseleave", () => {
    el.style.background = "#fff";
    el.style.transition = ".7s background-color ease-out";
  });
});
