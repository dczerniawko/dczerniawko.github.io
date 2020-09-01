const slideList = [
  {
    text: `"I’ve been interested in coding for a while but never taken the jump, until now. 
          I couldn’t recommend this course enough. I’m now in the job of my dreams and so 
          excited about the future. "`,
    name: "Tanya Sinclair",
    position: "UX Engineer",
    photoSrc: "images/image-tanya.jpg",
  },
  {
    text: `" If you want to lay the best foundation possible I’d recommend taking this course. 
          The depth the instructors go into is incredible. I now feel so confident about 
          starting up as a professional developer. "`,
    name: "John Tarkpor",
    position: "Junior Front-end Developer",
    photoSrc: "images/image-john.jpg",
  },
];

let slideActive = 0;

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

const text = document.querySelector(".text");
const name = document.querySelector(".name");
const position = document.querySelector(".position");
const photo = document.querySelector(".foto");

const changeSlide = (e) => {
  if (e.currentTarget.className === "next-btn") slideActive++;
  else if (e.currentTarget.className === "prev-btn") slideActive--;
  if (slideActive === slideList.length) slideActive = 0;
  else if (slideActive < 0) slideActive = slideList.length - 1;

  text.textContent = slideList[slideActive].text;
  name.textContent = slideList[slideActive].name;
  position.textContent = slideList[slideActive].position;
  photo.setAttribute("src", slideList[slideActive].photoSrc);
};

nextBtn.addEventListener("click", changeSlide);
prevBtn.addEventListener("click", changeSlide);
