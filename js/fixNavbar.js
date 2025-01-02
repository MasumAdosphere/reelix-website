// window.addEventListener("scroll", function () {
//   var navbar = document.querySelector(".navbar");
//   if (window.scrollY > 100) {
//     navbar.classList.add("fixed-top");
//   } else {
//     navbar.classList.remove("fixed-top");
//   }
// });
window.addEventListener("scroll", function () {
  var navbar = document.querySelector(".navbar");
  if (window.scrollY > 150) {
    navbar.classList.add("fixed-top");
  } else {
    navbar.classList.remove("fixed-top");
  }
});

window.addEventListener("DOMContentLoaded", (e) => {
  setTimeout(() => {
    const openMenu = document.querySelector(".menu-open");
    const closeMenu = document.querySelector(".menu-close");
    const menuDiv = document.querySelector(".commonmenu");
    const menu = document.getElementById("commonmenu-nav");
    const dropDowns = menu.getElementsByClassName("nav-dropdown");
    const dropDownsChild = menu.querySelectorAll(".dropdown .nav-dropdown");
    const mainClassMenu = document.querySelector(".main-nav");

    openMenu.addEventListener("click", menuToggle);
    closeMenu.addEventListener("click", menuToggle);

    document.body.insertAdjacentHTML(
      "beforeend",
      "<div id='menu-overlay'></div>"
    );
    document
      .querySelector("#menu-overlay")
      .addEventListener("click", menuToggle);

    function menuToggle() {
      menuDiv.classList.toggle("active");
      document.body.classList.toggle("hide-scrolling");
      document.body.classList.toggle("mobile-menu-active");
      document.getElementById("menu-overlay").classList.toggle("show");
    }

    for (var i = 0; i < dropDownsChild.length; i++) {
      dropDownsChild[i].classList.add("child");
      dropDownsChild[i].addEventListener("click", function () {
        this.classList.toggle("opened");
      });
    }
    for (var i = 0; i < dropDowns.length; i++) {
      if (!dropDowns[i].classList.contains("child")) {
        dropDowns[i].classList.add("parent");
        dropDowns[i].addEventListener("click", function () {
          this.classList.toggle("opened");
        });
      }
    }
  }, 1000); // Adjust the delay time (in milliseconds) as needed
});
