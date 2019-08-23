class Board {
  constructor( width, height) {
    this.width = width;
    this.height = height;
    this.matrixWithAliveCells = [...Array(width)].map(_ => [...Array(height)].map(_ => false));
  }

  asString() {
    return "I am a board";
  }
}

module.exports = Board;
