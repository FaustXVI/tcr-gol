const Board = require('./Board');

describe('Board', () => {
    it('should initialize', () => {
        const board = new Board(5, 6);
        expect(board.width).toEqual(5);
        expect(board.height).toEqual(6);
    });

    it('should initialize an empty board', () => {
        const board = new Board(5, 6);
        expect(board.matrixWithAliveCells.length).toEqual(5);
        expect(board.matrixWithAliveCells[0].length).toEqual(6);
    });

    it('should set a value', () => {
        const board = new Board(5, 6);
        board.setCell(3, 4, true);
        expect(board.matrixWithAliveCells[3][4]).toEqual(true);
    });

    it('should represent a dead cell with a dot', () => {
        const board = new Board(1, 1);
        expect(board.asString()).toEqual(".\n");
    });

    it('should print an empty board', () => {
        const board = new Board(0, 0);
        expect(board.asString()).toEqual("");
    });

  it('should move board one dummy step ahead and negate every field', () => {
      const board = new Board(5, 6);
      board.moveBoardOneStepAhead();
      expect(board.matrixWithAliveCells.some(line => line.some(cell => !cell))).toEqual(false);
  });
});
