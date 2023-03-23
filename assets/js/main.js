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
// preloader
let loader = document.getElementById("preloader");
window.addEventListener("load", function () {
  loader.style.display = "none";
});
// ----------------
// header logout, and appearing msgs
let logOutParent = document.querySelector(".nav-img");
let logOutParentImg = document.querySelector(".nav-img img");
let logOut = document.querySelector(".log-out");
let msgParent = document.querySelector(".msg-parent");
let msgParentSpan = document.querySelector(".msg-parent span");
let msg = document.querySelector(".msg");

document.addEventListener("DOMContentLoaded", function () {
  logOutParent.addEventListener("click", function (e) {
    e.preventDefault();
    logOut.classList.toggle("d-none");
  });
  logOutParentImg.addEventListener("click", function (e) {
    e.stopPropagation();
    logOutParentImg.nextElementSibling.classList.toggle("d-none");
  });

  msgParent.addEventListener("click", function () {
    msg.classList.toggle("d-none");
  });
  msgParentSpan.addEventListener("click", function (e) {
    e.stopPropagation();
    msg.classList.toggle("d-none");
  });

  logOut.addEventListener("click", function (event) {
    event.stopPropagation();
  });

  logOut.addEventListener("mouseover", function (event) {
    event.stopPropagation();
  });

  logOut.addEventListener("mouseover", function () {
    logOutParent.style.backgroundColor = "transparent";
  });

  logOutParent.addEventListener("mouseover", function () {
    logOutParent.style.backgroundColor = "var(--main-color)";
  });
  logOutParent.addEventListener("mouseleave", function () {
    logOutParent.style.backgroundColor = "transparent";
  });
  msg.addEventListener("mouseover", function (e) {
    e.stopPropagation();
    msgParent.style.backgroundColor = "transparent";
  });
  msg.addEventListener("click", function (e) {
    e.stopPropagation();
  });

  msgParent.addEventListener("mouseover", function () {
    msgParent.style.backgroundColor = "var(--main-color)";
  });
  msgParent.addEventListener("mouseleave", function () {
    msgParent.style.backgroundColor = "transparent";
  });
});
document.addEventListener("click", function (e) {
  if (e.target !== logOutParent) {
    logOut.classList.add("d-none");
  }
  if (e.target !== msgParent) {
    msg.classList.add("d-none");
  }
});
