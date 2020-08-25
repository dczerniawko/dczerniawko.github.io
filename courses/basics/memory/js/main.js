const startTime = new Date().getTime();
const cardColors = ["a1", "a1", "a2", "a2", "a3",
    "a3", "a4", "a4", "a5", "a5", "a6", "a6"
];

let cards = [...document.querySelectorAll(".card")]
let activeCard = "";
const activeCards = [];

const gameLength = cards.length / 2;
let gameResult = 0;
let turnCounter = 0;


const clickCard = function () {

    activeCard = this;
    activeCard.classList.remove("hidden");
    if (activeCard == activeCards[0]) return;

    if (activeCards.length === 0) {
        activeCards[0] = activeCard;
        turnCounter++;
        return;

    } else {
        cards.forEach(card => card.removeEventListener("click", clickCard))
        activeCards[1] = activeCard;

        setTimeout(function () {

            if (activeCards[0].className === activeCards[1].className) {
                activeCards.forEach(card => card.classList.add("off"))
                gameResult++;
                cards = cards.filter(card => !card.classList.contains("off"));

                if (gameResult == gameLength) {
                    const endTime = new Date().getTime();
                    const gameTime = ((endTime - startTime) / 1000);
                    alert(`Your game time is: ${gameTime} second in ${turnCounter} turns!`)
                    location.reload();
                }
            } else {
                activeCards.forEach(card => card.classList.add("hidden"))
            }

            activeCard = "";
            activeCards.length = 0;
            cards.forEach(card => card.addEventListener("click", clickCard))

        }, 1000)
    }
};

const init = () => {
    cards.forEach(card => {
        const position = Math.floor(Math.random() * cardColors.length);

        card.classList.add(cardColors[position]);
        cardColors.splice(position, 1);
    })

    setTimeout(function () {
        cards.forEach(card => {
            card.classList.add("hidden")
            card.addEventListener("click", clickCard)
        })
    }, 500)
};

init()