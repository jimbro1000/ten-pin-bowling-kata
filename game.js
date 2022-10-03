const MAXIMUM_PINS = 10;
const MINIMUM_PINS = 0;

class Game {
    #rolls = [];

    roll(pins) {
        if (!Number.isInteger(pins)) {
            throw new Error("Input must be an integer");
        }
        if (pins > MAXIMUM_PINS) {
            throw new Error(`Pins must not be greater than ${MAXIMUM_PINS}`);
        }
        if (pins < MINIMUM_PINS) {
            throw new Error(`Pins must not be less than ${MINIMUM_PINS}`);
        }
        this.#rolls.push(pins);
    }

    score() {
        const initialScore = 0;
        const sumTotal = this.#rolls.reduce(
            (runningTotal, currentValue) => runningTotal + currentValue,
            initialScore
        );
        return sumTotal;
    }
}

module.exports = Game;