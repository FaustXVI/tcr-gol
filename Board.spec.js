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
    board.setCell(3,4, true);
    expect(board.matrixWithAliveCells[3][4]).toEqual(true);
  });

  it('should return a string representation', () => {
    const board = new Board(5, 6);
    expect(board.asString()).toEqual("I am a board")
  })
});
