const loginForm = document.querySelector(".login");
const registerForm = document.querySelector(".register");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");

loginLink.addEventListener("click", () => {
  loginForm.style.display = "block";
  registerForm.style.display = "none";
});

registerLink.addEventListener("click", () => {
  loginForm.style.display = "none";
  registerForm.style.display = "block";
});

// default
registerForm.style.display = "none";

//forgot password section
const aForgotPass = document.querySelector(".a__forgot-password");
const forgotForm = document.querySelector(".forgot");
const forgotLink = document.querySelector(".forgot-link");

aForgotPass.addEventListener("click", () => {
  forgotForm.style.display = "block";
  loginForm.style.display = "none";
});

forgotLink.addEventListener("click", () => {
  forgotForm.style.display = "none";
  loginForm.style.display = "block";
});

//terms of use section
const popupTerms = document.querySelector(".popup__terms__section");
const buttonAccept = document.querySelector(".btn-accept");
const buttonDecline = document.querySelector(".btn-decline");
const openRegulations = document.querySelector(".regulations-button");

buttonAccept.addEventListener("click", () => {
  popupTerms.style.display = "none";
});

buttonDecline.addEventListener("click", () => {
  popupTerms.style.display = "none";
});

openRegulations.addEventListener("click", () => {
  popupTerms.style.display = "flex";
});

//input section
const form = document.getElementById("form");
const user = document.getElementById("user");
const password = document.getElementById("password");

// blur
user.addEventListener("blur", () => {
  validateUserInput();
});

password.addEventListener("blur", () => {
  validatePasswordInput();
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs();
});

// login validation
const showError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
};

const showSuccess = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.remove("error");
};

const validateUserInput = () => {
  const userValue = user.value.trim();

  if (userValue === "") {
    showError(user, "Username is required");
  } else if (userValue.length < 6) {
    showError(user, "Username must be at least 6 characters");
  } else {
    showSuccess(user, "");
  }
};

const validatePasswordInput = () => {
  const passwordValue = password.value.trim();

  if (passwordValue === "") {
    showError(password, "Password is required");
  } else if (passwordValue.length < 8) {
    showError(password, "Password must contain at least 8 characters");
  } else if (!/[`~!@#$%^&*()_+-=;:'"|{}.>,</?]/.test(passwordValue)) {
    showError(password, "Minimum one special character required");
  } else if (!/\d/.test(passwordValue)) {
    showError(password, "Password must contain at least one digit");
  } else {
    showSuccess(password, "");
  }
};

// error reset
showSuccess(user, "");
showSuccess(password, "");

//forgot password validation section

const newPassword = document.getElementById("newpassword");
const confirmPassword = document.getElementById("confirmpassword");
const confirmPasswordError = document.querySelector(".error__forgot");

confirmPassword.addEventListener("blur", () => {
  validatePasswordsMatch();
});

const validatePasswordsMatch = () => {
  const newPasswordValue = newPassword.value.trim();
  const confirmPasswordValue = confirmPassword.value.trim();

  if (newPasswordValue === "" || confirmPasswordValue === "") {
    showError(confirmPasswordError, "Passwords cannot be empty");
  } else if (newPasswordValue !== confirmPasswordValue) {
    showError(confirmPasswordError, "Passwords do not match");
  } else if (newPasswordValue.length < 8) {
    showError(
      confirmPasswordError,
      "Password must contain at least 8 characters"
    );
  } else {
    showSuccess(confirmPasswordError, "Passwords match!");
    confirmPasswordError.classList.add("success-message");
  }
};

showSuccess(confirmPasswordError, "");

//register validation section
