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
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    const hamburger = document.getElementById("hamburger");
    const sideNav = document.getElementById("sideNav");
    const menuItems = sideNav.querySelectorAll("ul li");

    hamburger.addEventListener("click", () => {
      // Toggle the 'active' class on the hamburger to animate it into an "X"
      hamburger.classList.toggle("active");

      // Toggle the sidebar visibility by changing its 'left' position
      const currentLeft = window.getComputedStyle(sideNav).left;
      if (currentLeft === "0px") {
        sideNav.style.left = "-100%"; // Hide the sidebar
        body.classList.remove("side-nav-open"); // Enable body scrolling
      } else {
        sideNav.style.left = "0px"; // Show the sidebar
        body.classList.add("side-nav-open"); // Disable body scrolling
      }
    });
    menuItems.forEach((item) => {
      item.addEventListener("click", () => {
        // Close the sidebar
        sideNav.style.left = "-100%"; // Hide the sidebar
        hamburger.classList.remove("active"); // Reset the hamburger icon to its default state
        body.classList.remove("side-nav-open"); // Enable body scrolling
      });
    });
  }, 1000); // Delay of 1 second
});
