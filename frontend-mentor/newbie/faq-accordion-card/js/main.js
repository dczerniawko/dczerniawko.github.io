const buttons = document.getElementsByTagName("button");

for (const btn of buttons) {
  btn.addEventListener("click", showAnswer);
}

function showAnswer(e) {
  const child = e.currentTarget.parentElement.parentElement.children[1];
  if (child.style.display == "block") {
    child.style.display = "none";
    e.currentTarget.style.transform = "rotateX(0)";
  } else {
    child.style.display = "block";
    e.currentTarget.style.transform = "rotateX(180deg)";
  }
}
