try {
	const mainMenu = document.querySelector(".main-menu-contacts");
	const menuChildren0 = mainMenu.children[0];
	const socialIcons = document.querySelector(
	  ".main-menu-social__content-contacts"
	);
	const header = document.querySelector(".header-color-change");
  
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
		  menuChildren0.style.color = "var(--red)";
		  socialIcons.style.color = "var(--red)";
		} else {
		  menuChildren0.style.color = "var(--yellow)";
		  socialIcons.style.color = "var(--yellow)";
		}
	  });
	},
	headerOptions);
  
	headerObserver.observe(header);
  } catch (e) {}
  