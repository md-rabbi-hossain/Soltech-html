// JavaScript to make the navbar sticky
window.addEventListener("scroll", function () {
  const header = document.querySelector(".main-container");
  if (window.scrollY > 50) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
});
