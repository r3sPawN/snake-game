const Apple = require('./apple');
const Board = require('./board');
const Snake = require('./snake');

class Game {
  constructor(snakeSize, boardDimensons) {
    this.snake = new Snake(snakeSize);
    this.boardDimensons = boardDimensons;
    this.lastdirection = 'LEFT';
    this.isGameOver = false;
  }

  async start() {
    const apple = new Apple(this.snake.snakeBody, this.boardDimensons);

    while (!this.isGameOver) {
      this.snake.move(this.lastdirection);
      apple.snakeBody = this.snake.snakeBody;
      if (apple.isCollided()) {
        apple.setApplePosition();
        const newSnakeBody = this.snake.snakeBody.slice();
        const Tail = newSnakeBody.shift();
        this.snake.snakeBody.unshift(Tail);
      }
      const board1 = new Board(this.snake, this.boardDimensons, apple.applePosition);
      board1.render();

      // eslint-disable-next-line no-await-in-loop
      await new Promise((r) => setTimeout(r, 1000));
    }
  }
}

const game = new Game(3, [5, 5]);
game.start();
