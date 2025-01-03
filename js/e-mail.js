function validateContactForm() {
  const name = document.querySelector('input[name="name"]').value.trim();
  const email = document.querySelector('input[name="email"]').value.trim();
  const number = document.querySelector('input[name="phone"]').value.trim();
  var errorName = document.getElementById("errorName");
  var errorEmail = document.getElementById("errorEmail");
  var phoneError = document.getElementById("error-msg");

  const namePattern = /^[A-Za-z -]+$/;
  if (name === "" || !namePattern.test(name)) {
    errorName.innerHTML = "Invalid Name";
    return false;
  } else {
    errorName.innerHTML = "";
  }
  if (email === "") {
    errorEmail.innerHTML = "Enter email properly";
    return false;
  } else {
    errorEmail.innerHTML = "";
  }
  if (number === "" || phoneError.innerHTML !== "") {
    phoneError.innerHTML = "Enter number";
    return false;
  } else {
    phoneError.innerHTML = "";
  }
  return true;
}

const scriptURL =
  "https://script.google.com/macros/s/AKfycbxvNOfF3MERwa2jEATkH6GSk-E8grYb21EiNLptZc5dpPuSg0tqkkWAGRGBKLKkCXVS/exec";
const form3 = document.getElementById("contact-us-form");

if (form3) {
  form3.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!validateContactForm()) {
      return;
    }
    // Display loading effect
    showLoading();
    console.log(form3);

    const formData3 = new FormData(form3);
    console.log("formData", formData3);
    fetch(scriptURL, {
      method: "POST",
      body: formData3
    })
      .then((response) => {
        hideLoading();
        console.log("ress", response);
        alert("Thank you! Your form is submitted successfully.");
        form3.reset();
      })
      .then((data) => {
        // Optional: Reload the page after form submission
        // window.location.reload();
      })
      .catch((error) => {
        // Hide loading effect
        hideLoading();

        console.error("Error!", error.message);
      });
  });
}

function showLoading() {
  document.getElementById("loadingElementId").style.display = "block";
}

function hideLoading() {
  document.getElementById("loadingElementId").style.display = "none";
}
