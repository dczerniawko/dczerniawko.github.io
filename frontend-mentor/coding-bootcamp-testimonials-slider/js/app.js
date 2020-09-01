let prevBtn = document.querySelector(".prev-btn");
let nextBtn = document.querySelector(".next-btn");

let text = document.querySelector(".text");
let name = document.querySelector(".name");
let position = document.querySelector(".position");
let photo = document.querySelector(".foto");

prevBtn.addEventListener("click", () => {
  text.innerHTML =
    '"I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough I’m now in the job of my dreams and so excited about the future."';
  name.innerHTML = "Tanya Sinclair";
  position.innerHTML = " UX Engineer";
  photo.src = "../images/image-tanya.jpg";
});
nextBtn.addEventListener("click", () => {
  text.innerHTML =
    '"If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer."';
  name.innerHTML = "John Tarkpor";
  position.innerHTML = " Junior Front-end Developer";
  photo.src = "../images/image-john.jpg";
});
