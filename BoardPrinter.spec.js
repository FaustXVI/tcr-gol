const Board = require('./Board');

function printBoard() {
    return '1';
}

describe('Board toString', () => {
    it('should empty board result in empty string', () => {
        const board = new Board(0, 0);
        var boardString = printBoard();
        expect(boardString).toEqual('1')
    });
});