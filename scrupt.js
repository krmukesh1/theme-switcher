const themeToggler = document.querySelector(".theme-toggler");

function themeHandler() {
  themeToggler.classList.toggle("active");
  if (themeToggler.classList.contains("active")) {
    document.body.classList.add("active");
  } else {
    document.body.classList.remove("active");
  }
}

themeToggler.addEventListener("click", themeHandler);
