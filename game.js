const Apple = require('./apple');
const Board = require('./board');
const Snake = require('./snake');

class Game {
  constructor(snakeSize, boardDimensions) {
    this.snake = new Snake(snakeSize);
    this.boardDimensions = boardDimensions;
    this.apple = new Apple(this.snake.snakeBody, this.boardDimensions);
    this.board = new Board(this.snake, this.boardDimensions, this.apple.applePosition);
    this.lastdirection = 'LEFT';
    this.isGameOver = false;
  }

  hasGameEnded(snakeBody) {
    const newSnakeBody = snakeBody.slice();
    const snakeHead = newSnakeBody.pop();
    const newHead = { ...snakeHead };

    return newHead.x > this.boardDimensions[0] - 1 || newHead.y > this.boardDimensions[1] - 1 
       || newHead.x < 0 || newHead.y < 0;
      
  }

  async start() {
    while (!this.isGameOver) {      
      this.board.render();
      this.snake.move(this.lastdirection);
      this.apple.snakeBody = this.snake.snakeBody;
      
      if(this.hasGameEnded(this.snake.snakeBody)) {
        console.log("The game has ended");
        break;
      }

      if (this.apple.isCollided()) {
        this.apple.setNewApplePosition();
        this.board.applePosition = this.apple.applePosition;
        this.snake.increaseSnakeSize();
        this.board.snake = this.snake;
      }
      
      // eslint-disable-next-line no-await-in-loop
      await new Promise((r) => setTimeout(r, 1000));
    }
  }
}

module.exports = Game;
