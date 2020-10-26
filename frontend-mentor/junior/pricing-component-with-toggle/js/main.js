const chbox = document.querySelector(".checkbox");
const monthly = document.querySelectorAll(".box__price--monthly");
const annually = document.querySelectorAll(".box__price--annually");

function showPrice() {
  if (chbox.checked) {
    annually.forEach((price) => price.classList.add("hidden"));
    monthly.forEach((price) => price.classList.remove("hidden"));
  } else {
    annually.forEach((price) => price.classList.remove("hidden"));
    monthly.forEach((price) => price.classList.add("hidden"));
  }
}

chbox.addEventListener("click", showPrice);
