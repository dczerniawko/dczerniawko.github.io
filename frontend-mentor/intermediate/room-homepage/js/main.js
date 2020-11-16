const slideList = [
  {
    h1: "Discover innovative ways to decorate",
    text: `"We provide unmatched quality, comfort, and style for property owners across the country. 
            Our experts combine form andnfunction in bringing your vision to life. Create a room in your 
            own style with our collection and make your property a reflection of you and what you love."`,
    photoSrc: "images/desktop-image-hero-1.jpg",
  },
  {
    h1: "We are available all across the globe",
    text: `"With stores all over the world, it's easy for you to find furniture for your home or place of business. 
                Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
                store locator. Any questions? Don't hesitate to contact us today."`,
    photoSrc: "images/desktop-image-hero-2.jpg",
  },
  {
    h1: `"Manufactured with the best materials"`,
    text: `"Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
                to ensure that every product is made as perfect and as consistent as possible. With three decades of 
                experience in this industry, we understand what customers want for their home and office."`,
    photoSrc: "images/desktop-image-hero-3.jpg",
  },
];

let slideActive = 0;

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

const text = document.querySelector(".row-top__right__text");
const photo = document.querySelector(".photo");

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