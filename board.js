class Board {
  constructor(snake, boardDimensions, applePosition) {
    this.snake = snake;
    this.boardDimensions = boardDimensions;
    this.applePosition = applePosition;
  }

  calculateBoard(snakeBody, applePosition, boardDimensions) {
    const board = Array.from(Array(boardDimensions[0]),
      () => new Array(boardDimensions[1]).fill(0));

    snakeBody.forEach((element) => {
      board[element.x][element.y] = 'x';
    });

    board[applePosition.x][applePosition.y] = 'A';
    
    return board;
  }
  
  render() {
    const board = this.calculateBoard(this.snake.snakeBody, this.applePosition, this.boardDimensions);
    console.info(board);
    // eslint-disable-next-line no-console
    console.log('___________________');
  }
}

module.exports = Board;
