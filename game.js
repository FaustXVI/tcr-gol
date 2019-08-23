function simulateGame(iterations, board, printer) {
    for (let i = 0; i < iterations; i++) {
        printer(board.asString());
    }
}

module.exports = simulateGame;
