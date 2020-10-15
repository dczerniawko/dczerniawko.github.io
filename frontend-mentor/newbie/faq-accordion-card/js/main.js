const buttons = document.getElementsByTagName("button");

for (const btn of buttons) {
  btn.addEventListener("click", showAnswer);
}

function showAnswer(e) {
  const child = e.currentTarget.parentElement.parentElement.children[1];
  if (child.style.display == "block") child.style.display = "none";
  else child.style.display = "block";
}
