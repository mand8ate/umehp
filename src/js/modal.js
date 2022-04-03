import MicroModal from "micromodal";

MicroModal.init({
  disableScroll: false,
});

try {
  const worksIcon = document.querySelector(".works-icon");

  worksIcon.addEventListener("click", () => {
    window.scrollTo({ top: 50, behavior: "smooth" });
  });
} catch (e) {}
