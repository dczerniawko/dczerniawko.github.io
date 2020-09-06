const btn = document.querySelector(".btn");
const err = document.querySelector(".error");
const input = document.querySelector(".email");

function validateEmail() {
  const reEmail = /^.+@\w+\.\w+$/;
  if (reEmail.test(input.value)) err.style.display = "none";
  else err.style.display = "block";
}

btn.addEventListener("click", validateEmail);
