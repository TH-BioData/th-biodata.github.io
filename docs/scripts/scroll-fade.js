document.addEventListener("scroll", () => {
  const threshold = 120;
  if (window.scrollY > threshold) {
    document.body.classList.add("scrolled");
  } else {
    document.body.classList.remove("scrolled");
  }
});
