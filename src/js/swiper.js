import Swiper, { EffectCoverflow, Navigation } from "swiper";

require("swiper/css");
require("swiper/css/navigation");
require("swiper/css/pagination");
require("swiper/css/effect-cube");

try {
  var swiper = new Swiper(".swiper", {
    modules: [Navigation, EffectCoverflow],
    effect: "coverflow",
    coverflowEffect: {
      rotate: 20,
      scale: 1,
      depth: 400,
      modifier: 1,
      slideShadows: false,
    },
    spaceBetween: 10,
    speed: 400,
    slidesPerView: 1,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    centeredSlides: true,
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      1400: {
        slidesPerView: 3,
      },
    },
  });

  // Deactivate slide title for non-active elements
  document.addEventListener("DOMContentLoaded", function () {
    const active = swiper.activeIndex;
    const currentSlide = swiper.slides[active];
    const slideChildren = currentSlide.children[0].children[1];

    slideChildren.style.display = "block";
  });

  swiper.on("slideChange", function () {
    const active = swiper.activeIndex;
    const previous = swiper.previousIndex;
    const currentSlide = swiper.slides[active];
    const previousSlide = swiper.slides[previous];
    const currentChildren = currentSlide.children[0].children[1];
    const previousChildren = previousSlide.children[0].children[1];

    currentChildren.style.display = "block";
    previousChildren.style.display = "none";
  });
} catch (e) {}