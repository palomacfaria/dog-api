document.addEventListener("scroll", () => {
  const elipse = document.querySelector(".elipse2") as HTMLElement | null;
  const linkBold = document.querySelector(".link__bold") as HTMLElement | null;

  if (elipse) {
    if (window.scrollY > 0) {
      elipse.classList.add("hidden");
      if (linkBold) {
        linkBold.classList.add("link");
      }
    } else {
      elipse.classList.remove("hidden");
      if (linkBold) {
        linkBold.classList.remove("link");
      }
    }
  }
});
