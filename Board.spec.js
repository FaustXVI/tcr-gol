const Board = require('./Board');

describe('Board', () => {
  it('should initialize', () => {
    const board = new Board(5, 6);
    expect(board.width).toEqual(5);
    expect(board.height).toEqual(6);
  });
});
