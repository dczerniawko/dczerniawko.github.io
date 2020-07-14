const slideList = [{
    img: "img/img1.jpg",
    text: "Liście",
}, {
    img: "img/img2.jpg",
    text: "Góry",
}, {
    img: "img/img3.jpg",
    text: "Rzeka",
}, {
    img: "img/img4.jpg",
    text: "Lodowiec",
}, {
    img: "img/img5.jpg",
    text: "Droga",
}, {
    img: "img/img6.jpg",
    text: "Morze",
}, {
    img: "img/img7.jpg",
    text: "Zmierzch",
}];

const time = 5000;
let slideActive = 0;

const img = document.querySelector('img.slider');
const h1 = document.querySelector('h1.slider');
const dots = [...document.querySelectorAll('.dots span')];

const changeDots = () => {
    const activeDot = dots.findIndex(dot => dot.classList.contains('active'));
    dots[activeDot].classList.remove('active');
    dots[slideActive].classList.add('active');
}

const changeSlide = () => {
    slideActive++;
    if (slideActive === slideList.length) {
        slideActive = 0;
    }
    img.src = slideList[slideActive].img;
    h1.textContent = slideList[slideActive].text;

    changeDots();
}

let indexInterval = setInterval(changeSlide, time);

const keyChangeSlide = (e) => {
    if (e.keyCode == 37 || e.keyCode == 39) {
        clearInterval(indexInterval);
        e.keyCode == 37 ? slideActive-- : slideActive++;
        if (slideActive === slideList.length) {
            slideActive = 0;
        } else if (slideActive < 0) {
            slideActive = slideList.length - 1;
        }

        img.src = slideList[slideActive].img;
        h1.textContent = slideList[slideActive].text;

        changeDots();
        indexInterval = setInterval(changeSlide, time);
    }
}

window.addEventListener('keydown', keyChangeSlide);