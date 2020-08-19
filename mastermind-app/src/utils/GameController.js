export default class GameController {
    rows = [];
    activeRow = 0;
    numColors = 6;
    numPegs = 4;
    #code = [];
    numRows = 12;
    result = null;
    constructor(gameToLoad) {
        if (gameToLoad) {
            this.loadGame(gameToLoad);
        }
    }
    get currentRow() {
        return this.rows[this.activeRow];
    }
    get code() {
        return this.#code;
    }
    newGame() {
        this.result = null;
        this.rows = [];
        this.activeRow = 0;
        this.#code = [];
        for (let i = 0; i < this.numRows; i++) {
            let codePegs = new Array(this.numPegs).fill(null);
            let keyPegs = new Array(this.numPegs).fill(null);
            this.rows.push({ codePegs, keyPegs });
        }
        for (let i = 0; i < this.numPegs; i++) {
            this.#code.push(Math.floor(Math.random() * this.numColors));
        }
    }
    load(game) {
        game = JSON.parse(game);
        this.rows = game.rows;
        this.activeRow = game.activeRow;
        this.numColors = game.numColors;
        this.numPegs = game.numPegs;
        this.#code = game.code;
        this.result = game.result;
    }
    export() {
        return JSON.stringify({
            rows: this.rows,
            activeRow: this.activeRow,
            numColors: this.numColors,
            numPegs: this.numPegs,
            code: this.#code,
            result: this.result
        });
    }
    checkActiveRow() {
        // Return false if row was not filled in.
        if (this.rows[this.activeRow].codePegs.includes(null)) return false;

        const row = [...this.rows[this.activeRow].codePegs];

        // count matches of color AND location
        let exactMatches = this.#code.reduce(
            (total, el, i) => (el === row[i] ? total + 1 : total),
            0
        );

        // count matches of just color independant of location
        let totalMatches = 0;
        this.#code.forEach((el) => {
            let i = row.indexOf(el);
            if (i !== -1) {
                totalMatches++;
                row.splice(i, 1);
            }
        });

        //Create the keyPegs for the row
        const keyPegs = [];
        for (let i = 0; i < this.numPegs; i++) {
            if (i < exactMatches) {
                keyPegs.push(2);
            } else if (i < totalMatches) {
                keyPegs.push(1);
            } else {
                keyPegs.push(0);
            }
        }

        //Fill in the keyPegs for the row
        this.rows[this.activeRow].keyPegs = keyPegs;
    }

    // Always check Result after running submitRow
    submitRow() {
        this.checkActiveRow();

        if (this.checkForWin()) {
            this.result = "WIN";
        } else if (this.activeRow >= this.numRows - 1) {
            this.result = "LOSE";
        }
        this.activeRow++;
    }

    checkForWin() {
        return this.rows[this.activeRow].keyPegs.every((el) => el === 2);
    }
}

// mastermind = new GameController();
// mastermind.newGame();

// mastermind.rows[0].codePegs = [2, 2, 1, 1];

// console.log(mastermind.code);
// mastermind.checkActiveRow();
// console.log(mastermind.rows[0]);
