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
  "https://script.google.com/macros/s/AKfycbxkGjIA-MDtAoLpFeiGj-LyhMKxdnsBBBdrrCS0tBebBV3SJCxtnJ-aTZp7aUuIucLl/exec";
const form3 = document.getElementById("contact-us-form");

if (form3) {
  form3.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!validateContactForm()) {
      return;
    }
    // Display loading effect
    showLoading();

    const formData3 = new FormData(form3);
    const jsonPayload = {};
    formData3.forEach((value, key) => {
      jsonPayload[key] = value;
    });

    fetch(scriptURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(jsonPayload)
    })
      .then((response) => {
        hideLoading();

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
