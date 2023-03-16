// navbar-changing-color when scrolling down
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  const scrollPosition = window.scrollY;

  if (scrollPosition >= 70) {
    header.style.backgroundColor = "rgb(38 38 38 / 88%)";
  } else {
    header.style.backgroundColor = "transparent";
  }
});
// --------------
