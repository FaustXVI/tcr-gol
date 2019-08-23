const simulateGame = require('./game');
const Board = require('./Board');

simulateGame(10, new Board(10, 10), (line) => console.log(line));
