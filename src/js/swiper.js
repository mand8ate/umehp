import Swiper, { Navigation, Pagination } from "swiper";
require("swiper/css");
require("swiper/css/navigation");
require("swiper/css/pagination");

var swiper = new Swiper(".swiper", {
  modules: [Navigation, Pagination],
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
