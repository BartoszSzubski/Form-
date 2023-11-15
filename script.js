const loginForm = document.querySelector(".login");
const registerForm = document.querySelector(".register");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");

loginLink.addEventListener("click", () => {
  loginForm.classList.add("form__section--active");
  registerForm.classList.remove("form__section--active");
});

registerLink.addEventListener("click", () => {
  registerForm.classList.add("form__section--active");
  loginForm.classList.remove("form__section--active");
});

//forgot password section
const aForgotPass = document.querySelector(".a__forgot-password");
const forgotForm = document.querySelector(".forgot");
const forgotLink = document.querySelector(".forgot-link");

aForgotPass.addEventListener("click", () => {
  forgotForm.classList.add("form__section--active");
  loginForm.classList.remove("form__section--active");
});

forgotLink.addEventListener("click", () => {
  loginForm.classList.add("form__section--active");
  forgotForm.classList.remove("form__section--active");
});
//logged in section
const loggedForm = document.querySelector(".logged");
const loggedLink = document.querySelector(".logged-link");
const buttonLogout = document.querySelector(".button__logout");
const inputPlaceholder = document.querySelector(".input__placeholder");

loggedLink.addEventListener("click", () => {
  loggedForm.classList.add("form__section--active");
  loginForm.classList.remove("form__section--active");
});

buttonLogout.addEventListener("click", () => {
  loggedForm.classList.remove("form__section--active");
  loginForm.classList.add("form__section--active");
  showError(user, " ");
  showError(password, " ");
  inputPlaceholder.value = "";
  password.value = "";
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

// login validation settings
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

const validateUserInput = (isOnInput) => {
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

//hide and show password section
const eyeIcon = document.querySelector(".eye-icon");
const eyeOpen = document.querySelector(".eye-open");
const eyeClose = document.querySelector(".eye-close");
//id password //newpassword & confirmpassword //passwordregister
eyeIcon.addEventListener("click", () => {
  if (password.type === "password") {
    password.type = "text";
    newPassword.type = "text";
    confirmPassword.type = "text";
    passwordRegister.type = "text";
    eyeIcon.src = "images/eye-open.png";
  } else {
    password.type = "password";
    newPassword.type = "password";
    confirmPassword.type = "password";
    passwordRegister.type = "password";
    eyeIcon.src = "images/eye-close.png";
  }
});
//forgot password validation section

const newPassword = document.getElementById("newpassword");
const confirmPassword = document.getElementById("confirmpassword");
const confirmPasswordError = document.querySelector(".error__forgot");
const forgotPasswordSubmit = document.querySelector(".button__new-password");

confirmPassword.addEventListener("blur", () => {
  validatePasswordsMatch();
});

forgotPasswordSubmit.addEventListener("click", () => {
  validatePasswordsMatch(true);
});

const validatePasswordsMatch = (isSubmit = false) => {
  const newPasswordValue = newPassword.value.trim();
  const confirmPasswordValue = confirmPassword.value.trim();

  if (newPasswordValue === "" || confirmPasswordValue === "") {
    showError(confirmPasswordError, "Passwords cannot be empty");
    confirmPasswordError.classList.remove("success-message");
  } else if (newPasswordValue !== confirmPasswordValue) {
    showError(confirmPasswordError, "Passwords do not match");
    confirmPasswordError.classList.remove("success-message");
  } else if (newPasswordValue.length < 8) {
    showError(
      confirmPasswordError,
      "Password must contain at least 8 characters"
    );
    confirmPasswordError.classList.remove("success-message");
  } else {
    showSuccess(confirmPasswordError, "Passwords match!");
    confirmPasswordError.classList.add("success-message");
    if (isSubmit) {
      loginForm.classList.add("form__section--active");
      forgotForm.classList.remove("form__section--active");
    }
  }
};

showSuccess(confirmPasswordError, "");

// register validation section
const userRegister = document.getElementById("userregister");
const email = document.getElementById("email");
const passwordRegister = document.getElementById("passwordregister");
const buttonRegister = document.querySelector(".button__register");

userRegister.addEventListener("blur", () => {
  validateUserRegisterInput();
});

email.addEventListener("blur", () => {
  validateEmailInput();
});

passwordRegister.addEventListener("blur", () => {
  validatePasswordRegisterInput();
});

const validateEmailInput = () => {
  const emailValue = email.value.trim();

  if (emailValue === "") {
    showError(email, "Email is required");
  } else if (!isValidEmail(emailValue)) {
    showError(email, "Invalid email address");
  } else {
    showSuccess(email, "");
  }
};

const validatePasswordRegisterInput = (isSubmit = false) => {
  const passwordValue = passwordRegister.value.trim();

  if (passwordValue === "") {
    showError(passwordRegister, "Password is required");
  } else if (passwordValue.length < 8) {
    showError(passwordRegister, "Password must contain at least 8 characters");
  } else if (!/[`~!@#$%^&*()_+-=;:'"|{}.>,</?]/.test(passwordValue)) {
    showError(passwordRegister, "Minimum one special character required");
  } else if (!/\d/.test(passwordValue)) {
    showError(passwordRegister, "Password must contain at least one digit");
  } else {
    showSuccess(passwordRegister, "");
    if (isSubmit) {
      registerForm.classList.remove("form__section--active");
      loginForm.classList.add("form__section--active");
    }
  }
};

const isValidEmail = (email, isSubmit = false) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validateUserRegisterInput = (isSubmit = false) => {
  const userValue = userRegister.value.trim();

  if (userValue === "") {
    showError(userRegister, "Username is required");
  } else if (userValue.length < 6) {
    showError(userRegister, "Username must be at least 6 characters");
  } else {
    showSuccess(userRegister, "");
    if (isSubmit) {
      validateRegistrationForm();
    }
  }
};

showSuccess(userRegister, "");
showSuccess(email, "");
showSuccess(passwordRegister, "");

const validateRegistrationForm = () => {
  const isPasswordValid = validatePasswordRegisterInput(true);
  const isEmailValid = isValidEmail(email.value.trim(), true);
  const isUserValid = validateUserRegisterInput(true);

  if (isPasswordValid && isEmailValid && isUserValid) {
    registerForm.classList.remove("form__section--active");
    loginForm.classList.add("form__section--active");
  }
};

buttonRegister.addEventListener("click", () => {
  validateRegistrationForm();
});
