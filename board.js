class Board {
  constructor(snake, boardDimensions, applePosition) {
    this.snake = snake;
    this.boardDimensions = boardDimensions;
    this.applePosition = applePosition;
  }

  render() {
    const board = Array.from(Array(this.boardDimensions[0]),
      () => new Array(this.boardDimensions[1]).fill(0));

    const newSnakeBody = this.snake.snakeBody.slice();
    const snakeHead = newSnakeBody.pop();
    const newHead = { ...snakeHead };

    if (newHead.x > this.boardDimensions[0] - 1 || newHead.y > this.boardDimensions[1] - 1
         || newHead.x < 0 || newHead.y < 0) {
      throw new Error('the snake hit a wall');
    }
    this.snake.snakeBody.forEach((element) => {
      board[element.x][element.y] = 'x';
    });

    board[this.applePosition[0].x][this.applePosition[0].y] = 'A';

    // eslint-disable-next-line no-console
    console.info(board);
    // eslint-disable-next-line no-console
    console.log('___________________');
  }
}

module.exports = Board;
