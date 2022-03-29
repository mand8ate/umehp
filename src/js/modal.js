import MicroModal from "micromodal";

MicroModal.init({
  disableScroll: true,
});

try {
  const worksIcon = document.querySelector(".works-icon");

  worksIcon.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
} catch (e) {}
