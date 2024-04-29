

function toggleNav() {
  var navLinks = document.querySelector(".nav-mobile");
  var bg = document.querySelector(".bg");
  navLinks.classList.toggle("active");
  bg.classList.toggle("active");
 
}
let nav_logo = document.getElementById("nav-logo");
let nav_toggler = document.querySelector(".nav-toggler");
if (window.innerWidth <= 992) {
  

  nav_toggler.style.color="#ffff";
} else {
  nav_toggler.style.color="#0D0D0D";
}
window.addEventListener("resize", function () {
  if (window.innerWidth <= 992) {

    nav_toggler.style.color="#ffff";

  } else {
    nav_toggler.style.color="#0D0D0D";
  }
});

window.addEventListener("scroll", function () {
  if (window.innerWidth <= 992) {
   
    if (window.scrollY >= 140) {
      let header = document.querySelector("header");
      nav_toggler.style.color="#0D0D0D";

    } else {
      nav_toggler.style.color="#ffff";
    }
  } else {
  }
});
const slideLeftElements = document.querySelectorAll('.slide-left');

// Check if the elements are visible on the page
function checkSlideLeftElements() {
    slideLeftElements.forEach(slideLeftElement => {
        const slideInAt = (window.scrollY + window.innerHeight) - slideLeftElement.offsetHeight / 2;
        const elementBottom = slideLeftElement.offsetTop + slideLeftElement.offsetHeight;
        const isHalfShown = slideInAt > slideLeftElement.offsetTop;
        const isNotScrolledPast = window.scrollY < elementBottom;
        if (isHalfShown && isNotScrolledPast) {
            slideLeftElement.classList.add('show');
        } else {
            slideLeftElement.classList.remove('show');
        }
    });
}

window.addEventListener('scroll', checkSlideLeftElements);
checkSlideLeftElements();

const slideRightElements = document.querySelectorAll('.slide-right');
function checkSlideRightElements() {
slideRightElements.forEach(slideRightElement => {
const slideInAt = (window.scrollY + window.innerHeight) - slideRightElement.offsetHeight / 2;
const elementBottom = slideRightElement.offsetTop + slideRightElement.offsetHeight;
const isHalfShown = slideInAt > slideRightElement.offsetTop;
const isNotScrolledPast = window.scrollY < elementBottom;
if (isHalfShown && isNotScrolledPast) {
slideRightElement.classList.add('show');
} else {
slideRightElement.classList.remove('show');
}
});
}

window.addEventListener('scroll', checkSlideRightElements);
checkSlideRightElements();
const cardGreen = document.querySelectorAll('.card');
const ContentHead = document.querySelectorAll('.content-head');
const MainHeader = document.querySelectorAll('.main-header');
const FloatingBg = document.querySelectorAll('.floating-bg');
const header = document.querySelectorAll('header');

function checkCardGreen() {
  cardGreen.forEach(cardGreene => {
    const slideInAt = (window.scrollY + window.innerHeight) - cardGreene.offsetHeight / 2;
    const elementBottom = cardGreene.offsetTop + cardGreene.offsetHeight;
    const isHalfShown = slideInAt > cardGreene.offsetTop;
    const isNotScrolledPast = window.scrollY < elementBottom;
    if (isHalfShown && isNotScrolledPast) {
      cardGreene.style.opacity = 1;
    } else {
      cardGreene.style.opacity = 0;
    }
  });
  MainHeader.forEach(cardGreene => {
    const slideInAt = (window.scrollY + window.innerHeight) - cardGreene.offsetHeight / 2;
    const elementBottom = cardGreene.offsetTop + cardGreene.offsetHeight;
    const isHalfShown = slideInAt > cardGreene.offsetTop;
    const isNotScrolledPast = window.scrollY < elementBottom;
    if (isHalfShown && isNotScrolledPast) {
      cardGreene.style.opacity = 1;
    } else {
      cardGreene.style.opacity = 0;
    }
  });
  header.forEach(cardGreene => {
    const slideInAt = (window.scrollY + window.innerHeight) - cardGreene.offsetHeight / 2;
    const elementBottom = cardGreene.offsetTop + cardGreene.offsetHeight;
    const isHalfShown = slideInAt > cardGreene.offsetTop;
    const isNotScrolledPast = window.scrollY < elementBottom;
    if (isHalfShown && isNotScrolledPast) {
      cardGreene.style.opacity = 1;
    } else {
      cardGreene.style.opacity = 0;
    }
  });
  FloatingBg.forEach(cardGreene => {
    const slideInAt = (window.scrollY + window.innerHeight) - cardGreene.offsetHeight / 2;
    const elementBottom = cardGreene.offsetTop + cardGreene.offsetHeight;
    const isHalfShown = slideInAt > cardGreene.offsetTop;
    const isNotScrolledPast = window.scrollY < elementBottom;
    if (isHalfShown && isNotScrolledPast) {
      cardGreene.style.opacity = 1;
    } else {
      cardGreene.style.opacity = 0;
    }
  });
  ContentHead.forEach(cardGreene => {
    const slideInAt = (window.scrollY + window.innerHeight) - cardGreene.offsetHeight / 2;
    const elementBottom = cardGreene.offsetTop + cardGreene.offsetHeight;
    const isHalfShown = slideInAt > cardGreene.offsetTop;
    const isNotScrolledPast = window.scrollY < elementBottom;
    if (isHalfShown && isNotScrolledPast) {
     
      cardGreene.style.opacity = 1;
    } else {
      cardGreene.style.opacity = 0;
    }
  });
}

window.addEventListener('scroll', checkCardGreen);
checkCardGreen();
