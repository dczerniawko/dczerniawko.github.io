class Draw {
    constructor() {
        this.options = ['red', 'green', 'blue'];
        let _result = this.drawResults();
        this.getDrawResult = () => _result;
    }

    drawResults() {
        let colors = [];
        for (let i = 0; i < this.options.length; i++) {
            const index = Math.floor(Math.random() * this.options.length);
            const color = this.options[index];
            colors.push(color);
        }

        return colors;
    }

}