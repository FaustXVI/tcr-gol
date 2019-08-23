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
        return "I am a board";
    }

    setCell(i_width, i_height, value) {
        this.matrixWithAliveCells[i_width][i_height] = value;
    }
}

module.exports = Board;
