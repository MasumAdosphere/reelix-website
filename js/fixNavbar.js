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
    const hamburger = document.getElementById("hamburger"); // Hamburger in navbar
    const sideNav = document.getElementById("sideNav"); // Sidebar element
    const menuItems = sideNav.querySelectorAll("ul li"); // Sidebar menu items
    const body = document.body;
    const sideHamburger = document.getElementById("sideHamburger"); // Hamburger inside sidebar

    // Toggle sidebar visibility when clicking the hamburger button (in navbar)
    hamburger.addEventListener("click", () => {
      toggleSidebar();
    });

    // Toggle sidebar visibility when clicking the hamburger inside the sidebar
    if (sideHamburger) {
      sideHamburger.addEventListener("click", () => {
        toggleSidebar();
      });
    }

    // Function to toggle the sidebar open/close
    function toggleSidebar() {
      hamburger.classList.toggle("active"); // Toggle hamburger icon (navbar)
      if (sideHamburger) {
        sideHamburger.classList.toggle("active"); // Toggle the hamburger inside the sidebar
      }

      // Toggle the sidebar's visibility
      const currentLeft = window.getComputedStyle(sideNav).left;
      if (currentLeft === "0px") {
        sideNav.style.left = "-100%"; // Hide the sidebar
        sideNav.classList.remove("open"); // Remove open class for shadow
        body.classList.remove("side-nav-open"); // Remove overlay background
      } else {
        sideNav.style.left = "0px"; // Show the sidebar
        sideNav.classList.add("open"); // Add open class for shadow
        body.classList.add("side-nav-open"); // Add overlay background
      }
    }

    // Close sidebar when clicking a menu item inside the sidebar
    menuItems.forEach((item) => {
      item.addEventListener("click", () => {
        // Close the sidebar
        sideNav.style.left = "-100%"; // Hide the sidebar
        sideNav.classList.remove("open"); // Remove open class for shadow
        hamburger.classList.remove("active"); // Reset the hamburger icon in navbar
        if (sideHamburger) {
          sideHamburger.classList.remove("active"); // Reset the hamburger icon in sidebar
        }
        body.classList.remove("side-nav-open"); // Remove overlay background
      });
    });

    // Close sidebar if click outside the sidebar
    document.addEventListener("click", function (e) {
      if (
        !sideNav.contains(e.target) &&
        !hamburger.contains(e.target) &&
        !sideHamburger.contains(e.target)
      ) {
        sideNav.style.left = "-100%"; // Hide the sidebar
        sideNav.classList.remove("open"); // Remove open class for shadow
        body.classList.remove("side-nav-open"); // Remove overlay background

        // Reset both hamburger icons to default
        hamburger.classList.remove("active");
        if (sideHamburger) {
          sideHamburger.classList.remove("active");
        }
      }
    });
  }, 1000); // Delay of 1 second for the document to load
});
