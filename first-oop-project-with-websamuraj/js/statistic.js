class Statistic {
    constructor() {
        this.gameResults = [];
    }
    addGameToStatistics(win, bet) {
        let gameResult = {
            win: win,
            bet: bet,
        }
        this.gameResults.push(gameResult);
    }
    showGameStatistics() {
        let games = this.gameResults.length;
        let wins = this.gameResults.filter(result => result.win).length;
        let losses = this.gameResults.filter(result => !result.win).length;
        return [games, wins, losses];
    }
}

const statistic = new Statistic;