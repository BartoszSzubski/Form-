const loginView = document.querySelector(".login");
const registerView = document.querySelector(".register");
const forgotView = document.querySelector(".forgot");
const loggedView = document.querySelector(".logged");

const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const forgotLink = document.querySelector(".a__forgot-password");
const forgotLinkBack = document.querySelector(".forgot-link");
const buttonLogout = document.querySelector(".button__logout");

let currentView = document.querySelector(".form__section--active");

handleViews();
liveValidation();
handleFormSubmits();
handleTogglePasswordVisibility();

function liveValidation() {
  loginLiveValidation();
  forgotPassowrdLiveValidation();
  registerLiveValidation();
}

function handleFormSubmits() {
  loginSubmit();
  registerSubmit();
  forgotPasswordSubmit();
}

function handleViews() {
  handleRegulationsModal();

  loginLink.addEventListener("click", () => {
    changeView(loginView);
  });
  registerLink.addEventListener("click", () => {
    changeView(registerView);
  });
  forgotLink.addEventListener("click", () => {
    changeView(forgotView);
  });
  forgotLinkBack.addEventListener("click", () => {
    changeView(loginView);
  });
  buttonLogout.addEventListener("click", () => {
    changeView(loginView);
  });
}

function changeView(targetView) {
  targetView.classList.add("form__section--active");
  currentView.classList.remove("form__section--active");
  currentView = targetView;
  clearForms();
}

function clearForms() {
  const errors = document.querySelectorAll(".error");
  const inputs = document.querySelectorAll("input");

  errors.forEach((error) => {
    error.innerText = "";
  });

  inputs.forEach((input) => {
    if (input.type == "checkbox") {
      input.checked = false;
    }

    input.value = null;
  });
}

function handleRegulationsModal() {
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
}

function handleTogglePasswordVisibility() {
  const passwordInputs = document.querySelectorAll("input[type='password']");

  passwordInputs.forEach((input) => {
    const inputContainer = input.parentElement;
    const eyeOpen = inputContainer.querySelector(".eye-open");
    const eyeClose = inputContainer.querySelector(".eye-close");
    const forgotView = input.closest(".forgot");

    if (!eyeOpen) return;
    if (!eyeClose) return;

    eyeOpen.classList.add("eye-icon--hidden");

    // Hide password
    eyeOpen.addEventListener("click", () => {
      input.type = "password";
      eyeClose.classList.remove("eye-icon--hidden");
      eyeOpen.classList.add("eye-icon--hidden");

      if (forgotView) {
        const confirmPassword = document.querySelector("#confirmpassword");
        confirmPassword.type = "password";
      }
    });

    // Show password
    eyeClose.addEventListener("click", () => {
      input.type = "text";
      eyeClose.classList.add("eye-icon--hidden");
      eyeOpen.classList.remove("eye-icon--hidden");

      if (forgotView) {
        const confirmPassword = document.querySelector("#confirmpassword");
        confirmPassword.type = "text";
      }
    });
  });
}

function loginSubmit() {
  const loginForm = document.querySelector(".login form");
  const userInput = document.getElementById("user");
  const passwordInput = document.getElementById("password");

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const { isError: isUsernameError, isSuccess: isUsernameSuccess } =
      validateUsername(userInput);
    const { isError: isPasswordError, isSuccess: isPasswordSuccess } =
      validatePassword(passwordInput);

    if (isUsernameSuccess && isPasswordSuccess) {
      changeView(loggedView);
    }
  });
}

function registerSubmit() {
  const registerForm = document.querySelector(".register form");
  const userInput = document.getElementById("userregister");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("passwordregister");

  registerForm.addEventListener("submit", (e) => {
    const { isError: isUsernameError, isSuccess: isUsernameSuccess } =
      validateUsername(userInput);
    const { isError: isPasswordError, isSuccess: isPasswordSuccess } =
      validatePassword(passwordInput);
    const { isError: isEmailError, isSuccess: isEmailSuccess } =
      validateEmail(emailInput);

    if (isUsernameSuccess && isPasswordSuccess && isEmailSuccess) {
      changeView(loginView);
    }
  });
}

function forgotPasswordSubmit() {
  const forgotForm = document.querySelector(".forgot form");
  const newPassword = document.getElementById("newpassword");
  const confirmPassword = document.getElementById("confirmpassword");
  forgotForm.addEventListener("submit", (e) => {
    const { isError: isPasswordError, isSuccess: isPasswordSuccess } =
      validatePassword(newPassword);
    const { isError: isMatchError, isSuccess: isMatchSuccess } =
      validatePasswordsMatch(newPassword, confirmPassword);

    if (isMatchSuccess && isPasswordSuccess) {
      changeView(loginView);
    }
  });
}

function loginLiveValidation() {
  const userInput = document.getElementById("user");
  const passwordInput = document.getElementById("password");

  userInput.addEventListener("blur", () => {
    const { isError, isSuccess, msg } = validateUsername(userInput);
    if (isError) showError(userInput, msg);
    if (isSuccess) showSuccess(userInput, "");
  });

  passwordInput.addEventListener("blur", () => {
    const { isError, isSuccess, msg } = validatePassword(passwordInput);
    if (isError) showError(passwordInput, msg);
    if (isSuccess) showSuccess(passwordInput, "");
  });
}

function registerLiveValidation() {
  const userInput = document.getElementById("userregister");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("passwordregister");

  userInput.addEventListener("blur", () => {
    const { isError, isSuccess, msg } = validateUsername(userInput);
    if (isError) showError(userInput, msg);
    if (isSuccess) showSuccess(userInput, "");
  });

  passwordInput.addEventListener("blur", () => {
    const { isError, isSuccess, msg } = validatePassword(passwordInput);
    if (isError) showError(passwordInput, msg);
    if (isSuccess) showSuccess(passwordInput, "");
  });

  emailInput.addEventListener("blur", () => {
    const { isError, isSuccess, msg } = validateEmail(emailInput);
    if (isError) showError(emailInput, msg);
    if (isSuccess) showSuccess(emailInput, "");
  });
}

function forgotPassowrdLiveValidation() {
  const newPassword = document.getElementById("newpassword");
  const confirmPassword = document.getElementById("confirmpassword");

  newPassword.addEventListener("blur", () => {
    const { isError, isSuccess, msg } = validatePassword(newPassword);
    if (isError) showError(newPassword, msg);
    if (isSuccess) showSuccess(newPassword, "");
  });

  confirmPassword.addEventListener("blur", () => {
    const { isError, isSuccess, msg } = validatePasswordsMatch(
      newPassword,
      confirmPassword
    );
    if (isError) showError(confirmPassword, msg);
    if (isSuccess) showSuccess(confirmPassword, "Passwords match!");
  });
}

function showError(element, message) {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("group-error");
  inputControl.classList.remove("success");
}

function showSuccess(element, message) {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.remove("group-error");
  inputControl.classList.add("success");
}

function validateUsername(userInput) {
  const userValue = userInput.value.trim();
  let isError = false;
  let isSuccess = false;
  let msg = "";

  if (userValue === "") {
    isError = true;
    msg = "Username is required";
  } else if (userValue.length < 6) {
    isError = true;
    msg = "Username must be at least 6 characters";
  } else {
    isSuccess = true;
  }

  return { isError, isSuccess, msg };
}

function validateEmail(emailInput) {
  const emailValue = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let isError = false;
  let isSuccess = false;
  let msg = "";

  if (emailValue === "") {
    isError = true;
    msg = "Email is required";
  } else if (!emailRegex.test(emailValue)) {
    isError = true;
    msg = "Invalid email address";
  } else {
    isSuccess = true;
  }

  return { isError, isSuccess, msg };
}

function validatePassword(passwordInput) {
  const specialCharsRegex = /\W|_/g;
  const passwordValue = passwordInput.value.trim();
  let isError = false;
  let isSuccess = false;
  let msg = "";

  if (passwordValue === "") {
    isError = true;
    msg = "Password is required";
  } else if (passwordValue.length < 8) {
    isError = true;
    msg = "Password must contain at least 8 characters";
  } else if (!specialCharsRegex.test(passwordValue)) {
    isError = true;
    msg = "Minimum one special character required";
  } else if (!/\d/.test(passwordValue)) {
    isError = true;
    msg = "Password must contain at least one digit";
  } else {
    isSuccess = true;
  }

  return { isError, isSuccess, msg };
}

function validatePasswordsMatch(newPassword, confirmPassword) {
  const newPasswordValue = newPassword.value.trim();
  const confirmPasswordValue = confirmPassword.value.trim();
  let isError = false;
  let isSuccess = false;
  let msg = "";

  // Check if new password is valid first
  const { isError: newPasswordError, isSuccess: newPasswordSucces } =
    validatePassword(newPassword);

  if (newPasswordError) {
    isError = true;
    return { isError, isSuccess, msg };
  }

  // Then compare both passwords
  if (newPasswordValue === "" || confirmPasswordValue === "") {
    isError = true;
    msg = "Passwords cannot be empty";
  } else if (newPasswordValue !== confirmPasswordValue) {
    isError = true;
    msg = "Passwords do not match";
  } else {
    isSuccess = true;
  }

  return { isError, isSuccess, msg };
}
