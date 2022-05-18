import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

try {
  // Animation included in every page
  const horiAnim = gsap.utils.toArray(".anim1");

  horiAnim.forEach((item) => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: item,
      },
    });

    tl.from(item, { x: 300, opacity: 0.1, duration: 1.5 });
  });

  const horiAnim2 = gsap.utils.toArray(".anim2");

  horiAnim2.forEach((item) => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: item,
      },
    });

    tl.from(item, { x: -300, opacity: 0.1, duration: 1.5 });
  });

  const galleryAnim = gsap.utils.toArray(".anim3");
  galleryAnim.forEach((item) => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: item,
      },
    });

    tl.from(item, { x: 300, opacity: 0.1, duration: 1.5 });
  });

  // const menuButtons = Array.from(document.querySelectorAll("#main-menu"));
  // const menuCloseButton = document.getElementById("menu-exit");
  // const menuOverlay = document.getElementById("menu-overlay");
  // const menuLeft = document.getElementById("menu-left");
  // const menuRight = document.getElementById("menu-right");

  // menuButtons.map((menuButton) => {
  //   menuButton.addEventListener("click", () => {
  //     menuOverlay.style.display = "block";

  //     menuLeft.style.display = "flex";
  //     menuRight.style.display = "block";
  //   });

  //   menuCloseButton.addEventListener("click", () => {
  //     menuRight.style.display = "none";
  //     menuLeft.style.display = "none";

  //     menuOverlay.style.display = "none";
  //   });
  // });

  // Menu Animation
} catch (e) {}

try {
  const menuButton = Array.from(document.querySelectorAll(".menu-open"));
  const closeButton = document.querySelector(".exit-menu");

  const menuTl = gsap.timeline({});
  menuTl.paused(true);

  menuTl.to(".overlay", { display: "block", opacity: 1 });
  menuTl.from(".menu-left", { opacity: 0, x: -1000 });
  menuTl.from(".menu-right", { opacity: 0, x: 2000 }, "-=.5");

  menuButton.forEach((button) => {
    button.addEventListener("click", () => {
      menuTl.play();
    });
  });

  closeButton.addEventListener("click", () => {
    menuTl.reverse(0.8);
  });
} catch (e) {}
