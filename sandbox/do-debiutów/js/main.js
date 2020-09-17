const endTime = new Date('2020-12-18 08:00:00').getTime();

const spanDay = document.querySelector('span.day');
const spanHour = document.querySelector('span.hour');
const spanMinute = document.querySelector('span.minute');
const spanSecond = document.querySelector('span.second');

setInterval(() => {
    const nowTime = new Date().getTime();
    const time = endTime - nowTime;
    let days = Math.floor(endTime / (1000 * 60 * 60 * 24) - (nowTime / (1000 * 60 * 60 * 24)));
    let hours = Math.floor((endTime / (1000 * 60 * 60) - nowTime / (1000 * 60 * 60)) % 24);
    let minutes = Math.floor((endTime / (1000 * 60) - nowTime / (1000 * 60)) % 60);
    let seconds = Math.floor((endTime / 1000 - nowTime / 1000) % 60);

    days = days < 10 ? `0${days}` : days;
    hours = hours < 10 ? `0${hours}` : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    spanDay.textContent = days;
    spanHour.textContent = hours;
    spanMinute.textContent = minutes;
    spanSecond.textContent = seconds;
}, 1000)