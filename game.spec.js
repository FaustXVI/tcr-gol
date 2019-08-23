const simulateGame = require('./game');

describe('game', () => {
    const print = jest.fn();

    it('should print for each iteration', () => {
        simulateGame(10, {}, print);

        for (let i = 0; i < 10; i++) {
            expect(print.mock.calls[i][0]).toBe("configure me");
        }
    })
});
