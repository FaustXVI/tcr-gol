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
});
