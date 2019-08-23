const simulateGame = require('./game');

describe('game', () => {
    const print = jest.fn();

    it('should print something', () => {
        simulateGame(10, print);

        expect(print.mock.calls[0][0]).toBe("configure me");
    })
});
