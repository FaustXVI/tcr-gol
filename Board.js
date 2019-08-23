var _ = require('lodash');

class Board {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.matrixWithAliveCells = [...Array(width)].map(_ => [...Array(height)].map(_ => false));
    }

    asString() {
        if (this.width === 0) {
            return "";
        }
        return ".\n";
    }

    setCell(i_width, i_height, value) {
        this.matrixWithAliveCells[i_width][i_height] = value;
    }

  moveBoardOneStepAhead() {
    const oldMatrix = _.cloneDeep(this.matrixWithAliveCells);

    for (let iw = 0; iw < this.width; iw++) {
      for (let ih = 0; ih < this.height; ih++) {
        this.matrixWithAliveCells[iw][ih] = !oldMatrix[iw][ih];
      }
    }
  }
}

module.exports = Board;
