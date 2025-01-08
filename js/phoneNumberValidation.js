// Phone number validation
const input = document.querySelector("#phone");
// const button = document.querySelector('#btn')
const errorMsg = document.querySelector("#error-msg");
const validMsg = document.querySelector("#valid-msg");

// here, the index maps to the error code returned from getValidationError - see readme
const errorMap = [
  "Invalid number",
  "Invalid country code",
  "Too short",
  "Too long",
  "Invalid number"
];

// initialise plugin
const iti = window.intlTelInput(input, {
  initialCountry: "in",
  utilsScript:
    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/19.2.16/js/utils.js"
});

const reset = () => {
  input.classList.remove("error");
  errorMsg.innerHTML = "";
  errorMsg.classList.add("hide");
  validMsg.classList.add("hide");
};

// on click button: validate
input.addEventListener("change", () => {
  // reset();
  if (input.value.trim()) {
    if (iti.isValidNumberPrecise()) {
      validMsg.classList.remove("hide");
    } else {
      input.classList.add("error");
      const errorCode = iti.getValidationError();
      console.log("errorCode", errorCode);
      errorMsg.innerHTML = errorMap[errorCode] || "Invalid number";
      errorMsg.classList.remove("hide");
      input.focus(); // Set focus on input field
    }
  }
});
