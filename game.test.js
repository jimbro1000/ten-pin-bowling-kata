const Game = require("./game.js")

describe("TenPin Bowling", () => {
    describe("roll", () => {
        let game;

        beforeEach( () => {
            game = new Game()
        });

        it("throws an exception if the pins parameter is not supplied as an integer" ,() => {
             expect.assertions(1);
             try {
                 game.roll(1.5);
             } catch (ex) {
                 expect(ex.message).toBe("Input must be an integer");
             }
        });
        it("throws an exception if the pins parameter is greater than 10", () => {
            expect.assertions(1);
            try {
                game.roll(11);
            } catch (ex) {
                expect(ex.message).toBe("Pins must not be greater than 10");
            }
        });
        it("throws an exception if the pins parameter is less than 0", () => {
            expect.assertions(1);
            try {
                game.roll(-1);
            } catch (ex) {
                expect(ex.message).toBe("Pins must not be less than 0");
            }
        });
        it("should not throw an exception on valid input", () => {
            expect(() => {game.roll(5)}).not.toThrow(Error);
        });
    });
    describe("score", () => {
        it("should return an integer not less than 0", () => {
            const game = new Game();
            const finalScore = game.score();
            expect(Number.isInteger(finalScore)).toBeTruthy();
            expect(finalScore).toBeGreaterThanOrEqual(0);
        });
        it.each([ {
            rolls: [1,5, 4,2, 3,6, 0,1, 1,2, 8,1, 5,3, 7,2, 2,3, 1,1],
            expected: 58
        }, {
            rolls: [1,5, 4,2, 3,6, 0,1, 1,3, 8,1, 5,3, 7,2, 2,3, 1,1],
            expected: 59
        } ])
        ( "should return the sum of pins where no spare or strikes are recorded",
            ({rolls, expected}) => {
            const game = new Game();
            for (let i = 0; i < 20; ++i) {
                game.roll(rolls[i]);
            }
            const score = game.score();
            expect(score).toBe(expected);
        });
    });
});