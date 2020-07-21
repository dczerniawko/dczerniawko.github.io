class Game {
    constructor(start) {
        this.statistic = new Statistic;
        this.wallet = new Wallet(start);
        document.getElementById('start').addEventListener('click', this.startGame);
        this.spanWallet = document.querySelector('.panel span.wallet');
        this.boards = [...document.querySelectorAll('div.color')];
        this.inputBet = document.getElementById('bet');
        this.spanResult = document.querySelector('.score span.result');
        this.spanGames = document.querySelector('.score span.number');
        this.spanWins = document.querySelector('.score span.win');
        this.spanLosses = document.querySelector('.score span.loss');

        this.render();
    }
    render(colors = ['gray', 'gray', 'gray'], money = this.wallet.getWalletValue(),
        result = "", statistic = [0, 0, 0], bet = 0, wonMoney = 0) {
        this.boards.forEach((board, i) => {
            board.style.backgroundColor = colors[i];
        })
        this.spanWallet.textContent = money;
        if (result) {
            result = `You win ${wonMoney}!`;
        } else if (!result && result != "") {
            resullt = `You lose ${bet}!`;
        }
        this.spanResult.textContent = result;
        this.spanGames.textContent = statistic[0];
        this.spanWins.textContent = statistic[0];
        this.spanLosses.textContent = statistic[0];
    }
    startGame() {
        if (this.inputBet.value < 1) return alert('You do not have enough money');
    }
}