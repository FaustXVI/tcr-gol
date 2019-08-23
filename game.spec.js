const simulateGame = require('./game');
const Board = require('./Board');
jest.mock('./Board');

describe('game', () => {
    const print = jest.fn();
    const boardAsString = jest.fn();

    beforeEach(() => {
        Board.mockClear();
        Board.mockImplementation(() => {
            return {
                asString: boardAsString
            };
        })
    });

    it('should print for each iteration', () => {
        boardAsString.mockImplementation(()=> "board printed");

        simulateGame(10, new Board(10, 10), print);

        for (let i = 0; i < 10; i++) {
            expect(print.mock.calls[i][0]).toBe("board printed");
        }
    })
});
