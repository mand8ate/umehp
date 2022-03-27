try {
  const mainMenu = document.querySelector(".main-menu");
  const socialIcons = document.querySelector(".main-menu-social__content");
  const header = document.querySelector(".header");

  const headerOptions = {
    root: null,
    threshold: 0,
    rootMargin: "-110px",
  };

  const headerObserver = new IntersectionObserver(function (
    entries,
    headerObserver
  ) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        mainMenu.children[0].style.display = "none";
        mainMenu.children[1].style.display = "block";
        mainMenu.children[2].style.color = "var(--red)";
        socialIcons.style.color = "var(--red)";
      } else {
        mainMenu.children[0].style.display = "block";
        mainMenu.children[1].style.display = "none";
        mainMenu.children[2].style.color = "var(--yellow)";
        socialIcons.style.color = "var(--yellow)";
      }
    });
  },
  headerOptions);

  headerObserver.observe(header);
} catch (e) {
  console.log("Not found, continue");
}
