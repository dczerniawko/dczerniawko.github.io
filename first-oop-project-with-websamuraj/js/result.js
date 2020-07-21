class Result {
    static checkWin(draw) {
        if (draw[0] === draw[1] && draw[1] === draw[2] ||
            draw[0] !== draw[1] && draw[1] !== draw[2] && draw[2] !== draw[0]) return true;
        else return false;
    }
    static moneyWinInGame(result, bet) {
        if (result) return 3 * bet;
        else return 0;
    }
}