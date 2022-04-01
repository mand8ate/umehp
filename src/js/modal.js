import MicroModal from "micromodal";

MicroModal.init({
  disableScroll: false,
});

try {
  const worksIcon = document.querySelector(".works-icon");

  worksIcon.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
} catch (e) {}
