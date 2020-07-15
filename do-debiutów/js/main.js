const endTime = new Date('2020-12-18 08:00:00').getTime();

const spanDay = document.querySelector('span.day');
const spanHour = document.querySelector('span.hour');
const spanMinute = document.querySelector('span.minute');
const spanSecond = document.querySelector('span.second');

setInterval(() => {
    const nowTime = new Date().getTime();
    const time = endTime - nowTime;
    const days = Math.floor(endTime / (1000 * 60 * 60 * 24) - (nowTime / (1000 * 60 * 60 * 24)));
    const hours = Math.floor((endTime / (1000 * 60 * 60) - nowTime / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((endTime / (1000 * 60) - nowTime / (1000 * 60)) % 60);
    const seconds = Math.floor((endTime / 1000 - nowTime / 1000) % 60);

    spanDay.textContent = days;
    spanHour.textContent = hours;
    spanMinute.textContent = minutes;
    spanSecond.textContent = seconds;
}, 1000)