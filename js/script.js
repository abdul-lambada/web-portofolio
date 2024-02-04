// Toggle Active Class
const navbar = document.querySelector(".navbar");
// Ketika Hamburger Menu Di Klik
document.querySelector("#menu-icon").onclick = () => {
  navbar.classList.toggle("active");
};
// Klik diluar sidebar untuk menghilangkan nav
const menu = document.querySelector("#menu-icon");

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbar.contains(e.target)) {
    navbar.classList.remove("active");
  }
});
