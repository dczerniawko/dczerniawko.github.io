const gameSummary = {
    numbers: 0,
    wins: 0,
    losses: 0,
    draws: 0
}

const game = {
    playerHand: "",
    aiHand: ""
}

const hands = [...document.querySelectorAll('.select img')];

const handSelection = (e) => {
    game.playerHand = e.target.dataset.option
    console.log(game.playerHand);
    hands.forEach(hand => hand.style.boxShadow = '');
    e.target.style.boxShadow = '0 0 0 5px cadetblue'
}

const computerChoice = () => {
    const aiHand = hands[Math.floor(Math.random() * hands.length)].dataset.option;
    return aiHand;
}

const publishResult = (player, ai, result) => {
    document.querySelector('[data-summary="your-choice"]').textContent = player;
    document.querySelector('[data-summary="ai-choice"]').textContent = ai;

    document.querySelector('p.numbers span').textContent = ++gameSummary.numbers;

    if (result === 'win') {
        document.querySelector('p.wins span').textContent = ++gameSummary.wins;
        document.querySelector('[data-summary="who-win"]').textContent = "Win!";
        document.querySelector('[data-summary="who-win"]').style.color = "green";
    } else if (result === 'lose') {
        document.querySelector('p.losses span').textContent = ++gameSummary.losses;
        document.querySelector('[data-summary="who-win"]').textContent = "Lose!";
        document.querySelector('[data-summary="who-win"]').style.color = "red";
    } else {
        document.querySelector('p.draws span').textContent = ++gameSummary.draws;
        document.querySelector('[data-summary="who-win"]').textContent = "Draw!";
        document.querySelector('[data-summary="who-win"]').style.color = "orange";
    }
}

const checkResult = (player, ai) => {
    if (player === ai) {
        return 'draw'
    } else if ((player === 'paper' && ai === 'rock') || (player === 'rock' && ai === 'scissors') ||
        (player === 'scissors' && ai === 'paper')) {
        return 'win'
    } else {
        return 'lose'
    }
}

const endGame = () => {
    document.querySelector(`[data-option="${game.playerHand}"]`).style.boxShadow = "";
    game.playerHand = "";
}

const startGame = () => {
    if (game.playerHand === "") {
        return alert('Yoy must choice something!');
    }

    game.aiHand = computerChoice();
    const gameResult = checkResult(game.playerHand, game.aiHand);
    publishResult(game.playerHand, game.aiHand, gameResult);
    endGame();
}

hands.forEach(hand => hand.addEventListener('click', handSelection))
document.querySelector('.start').addEventListener('click', startGame)