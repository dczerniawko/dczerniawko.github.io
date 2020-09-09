const form = document.querySelector("form");
const name = document.querySelector(".name");
const surname = document.querySelector(".surname");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const btn = document.querySelector(".btn");

const errName = document.getElementById("name");
const errSurname = document.getElementById("surname");
const errEmail = document.getElementById("email");
const errPassword = document.getElementById("password");

function validateName() {
  if (name.value === "") {
    errName.style.display = "block";
    name.style.backgroundImage = 'url("../images/icon-error.svg")';
  }
}

function validateSurname() {
  if (surname.value === "") {
    errSurname.style.display = "block";
    surname.style.backgroundImage = 'url("../images/icon-error.svg")';
  }
}

function validateEmail() {
  const reEmail = /^.+@\w+\.\w+$/;
  if (!reEmail.test(email.value)) {
    errEmail.style.display = "block";
    email.style.backgroundImage = 'url("../images/icon-error.svg")';
  }
}

function validatePassword() {
  if (password.value === "") {
    errPassword.style.display = "block";
    password.style.backgroundImage = 'url("../images/icon-error.svg")';
  }
}

function validateInput() {
  validateName();
  validateSurname();
  validateEmail();
  validatePassword();
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInput();
});
