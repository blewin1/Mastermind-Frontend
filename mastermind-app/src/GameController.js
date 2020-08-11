class GameController {
    constructor(numPegs, numColors) {
        this.rows = []
        for(let i = 0; i < 12; i++) {
            let pegs = []
            for(let j = 0; j < numPegs, j++) {
                pegs.push(null)
            }
            this.rows.push(pegs)
        }
    }

}