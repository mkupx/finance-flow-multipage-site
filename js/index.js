
const swiper = new Swiper(".swiper", {
  loop: true,
  lazy: {
    loadPrevNext:true,
  },

  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  breakpoints: {
    300: {
      slidesPerView: 1,
      spaceBetween: 0,
      centeredSlides: true,
    },
    800: {
      slidesPerView: 1,
      spaceBetween: 0,
      centeredSlides: false,
    },
    900: {
      centeredSlides: true,
      slidesPerView: 1.4,
      spaceBetween: 0,
    },
    1000: {
      slidesPerView: 1.5,
      spaceBetween: 0,
    },
    1100: {
      slidesPerView: 1.8,
      spaceBetween: 26,
    },
  },
});

const burger = document.getElementById('burger');
const menu = document.querySelector('.header__menu');
const header = document.querySelector('.header');

burger.addEventListener('click', () => {
  const isOpen = burger.classList.toggle('open');
  menu.classList.toggle('header__menu--active', isOpen);
  document.body.classList.toggle('menu-open', isOpen);
});
