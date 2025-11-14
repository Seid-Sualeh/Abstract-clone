document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  const mobileMenu = document.querySelector(".mobile-menu");

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", function () {
      mobileMenu.classList.toggle("active");

      const spans = this.querySelectorAll("span");
      if (mobileMenu.classList.contains("active")) {
        spans[0].style.transform = "rotate(45deg) translate(5px, 5px)";
        spans[1].style.opacity = "0";
        spans[2].style.transform = "rotate(-45deg) translate(5px, -5px)";
      } else {
        spans.forEach((s) => {
          s.style.transform = "none";
          s.style.opacity = "1";
        });
      }
    });

    document.addEventListener("click", function (event) {
      if (
        !mobileMenu.contains(event.target) &&
        !mobileMenuBtn.contains(event.target)
      ) {
        mobileMenu.classList.remove("active");
        const spans = mobileMenuBtn.querySelectorAll("span");
        spans.forEach((s) => {
          s.style.transform = "none";
          s.style.opacity = "1";
        });
      }
    });
  }
});
