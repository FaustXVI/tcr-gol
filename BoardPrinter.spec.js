const Board = require('./Board');

function printBoard(board) {
    return '';
}

describe('Board toString', () => {
    it('should empty board result in empty string', () => {
        const board = new Board(0, 0);
        var boardString = printBoard(board);
        expect(boardString).toEqual('')
    });
});