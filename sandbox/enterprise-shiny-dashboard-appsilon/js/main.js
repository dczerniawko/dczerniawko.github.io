const chbox = document.querySelector(".checkbox");
const buttons = document.querySelectorAll(".btn");
const button = document.querySelector(".range-btn");

function handleClick(e) {
  const child = e.currentTarget.parentElement.querySelector(".navigation");
  child.classList.toggle("navigation--active");
}
function popup() {
  alert("Processing...");
}

chbox.addEventListener("click", () => {
  document.body.classList.toggle("darkmode");
});
for (const btn of buttons) {
  btn.addEventListener("click", handleClick);
}
button.addEventListener("click", handleClick);
