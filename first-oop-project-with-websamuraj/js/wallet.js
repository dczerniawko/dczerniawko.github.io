class Wallet {
    constructor(money) {
        let _money = money;

        this.getWalletValue = () => _money;
        this.chectCanPlay = value => {
            if (_money >= value) return true;
            else false;
        }
        this.changeWallet = (value, type = '+') => {
            if (typeof value === 'number' & !isNaN(value)) {
                if (type === '+') {
                    return _money += value;
                } else if (type === '-') {
                    return _money -= value;
                } else {
                    throw new Error("something bad!")
                }
            } else {
                throw new Error("invalid type!")
            }
        }
    }
}

const wallet = new Wallet(200);