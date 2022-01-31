const menuIcon = document.querySelector(".hamburger-menu");
const navbar =document.querySelector(".navbar");

const list = document.querySelectorAll(".nav-list > li");
list.forEach((element) => {
  element.addEventListener("click", () => {
    navbar.classList.toggle("change");
  });
});

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("change");
});
