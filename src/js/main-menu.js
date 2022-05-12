import myImagePath from "../img/icons/menu-stamp.png";

try {
  const menuItems = document.querySelectorAll(".menu-item");

  if (menuItems) {
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
  }
} catch (e) {}
