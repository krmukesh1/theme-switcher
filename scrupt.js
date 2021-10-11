const themeToggler = document.querySelector(".theme-toggler");
const theme = document.querySelector(".themes-container");
const themeOpen = document.querySelector("#theme-open");
const themeClose = document.querySelector("#theme-close");

function themeHandler() {
  themeToggler.classList.toggle("active");
  if (themeToggler.classList.contains("active")) {
    document.body.classList.add("active");
  } else {
    document.body.classList.remove("active");
  }
}

themeToggler.addEventListener("click", themeHandler);

document.querySelectorAll(".theme-colors .color").forEach((color) => {
  color.onclick = () => {
    let background = color.style.background;
    document
      .querySelector(":root")
      .style.setProperty("--main-color", background);
  };
});

themeOpen.addEventListener("click", themeClickOpen);
function themeClickOpen() {
  theme.classList.add("active");
  document.body.style.paddingRight = "350px";
}
themeClose.addEventListener("click", themeClickClose);
function themeClickClose() {
  theme.classList.remove("active");
  document.body.style.paddingRight = "0px";
}
