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
