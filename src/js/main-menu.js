const menuButtons = Array.from(document.querySelectorAll("#main-menu"));
const menuCloseButton = document.getElementById("menu-exit");
const menuOverlay = document.getElementById("menu-overlay");
const menuLeft = document.getElementById("menu-left");
const menuRight = document.getElementById("menu-right");

const menuItems = document.querySelectorAll(".menu-item");

import myImagePath from "../img/icons/note.png";

menuButtons.map((menuButton) => {
  menuButton.addEventListener("click", () => {
    menuOverlay.style.display = "block";

    menuLeft.style.display = "flex";
    menuRight.style.display = "block";
  });

  menuCloseButton.addEventListener("click", () => {
    menuRight.style.display = "none";
    menuLeft.style.display = "none";

    menuOverlay.style.display = "none";
  });
});

menuItems.forEach((item) => {
  if (!item.className.includes("active")) {
    const itemIcon = item.querySelector(".item-icon");

    item.addEventListener("mouseover", () => {
      itemIcon.style.background = `url(${myImagePath}) no-repeat center`;
    });

    item.addEventListener("mouseout", () => {
      itemIcon.style.background = "";
    });
  }
});
