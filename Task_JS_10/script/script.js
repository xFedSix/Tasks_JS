const header = document.querySelector("header");
window.addEventListener("scroll", function (e) {
  const scrollFromTop = document.querySelector("html").scrollTop;
  header.style.background = scrollFromTop > 0 ? "red" : "green";
});
