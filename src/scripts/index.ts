document.addEventListener("scroll", () => {
  const elipse = document.querySelector(".elipse2");
  const linkBold = document.querySelector(".link__bold");

  if (elipse) {
    if (window.scrollY > 0) {
      elipse.classList.add("hidden");
      if (linkBold) {
        linkBold.classList.add("scrolled");
      }
    } else {
      elipse.classList.remove("hidden");
      if (linkBold) {
        linkBold.classList.remove("scrolled");
      }
    }
  }
});
