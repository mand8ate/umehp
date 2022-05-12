import MicroModal from "micromodal";
import gsap from "gsap";

try {
  MicroModal.init({
    onShow: (modal) => {
      gsap.from(modal, { x: 500, y: 250, scale: 0.2 });
    },
    disableScroll: true,
    disableFocus: true,
  });
  const worksIcon = document.querySelector(".works-icon");

  worksIcon.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
} catch (e) {}
