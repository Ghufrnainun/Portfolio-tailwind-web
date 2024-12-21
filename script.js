const navLinks = document.querySelector(".nav-links");
function onToggleMenu(e) {
  e.name = e.name === "menu" ? "close" : "menu";
  navLinks.classList.toggle("top-0");
}
var typed = new Typed("#typed", {
  strings: ["A Web Developer", "A Creative Thinker", "A Technology Enthusiast"],
  typeSpeed: 50,
  backSpeed: 25,
  loop: true,
});
