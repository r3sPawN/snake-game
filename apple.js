class Apple {
  constructor(snakeBody, boardDimensions) {
    this.snakeBody = snakeBody;
    this.boardDimensions = boardDimensions;
    this.applePosition = this.setApplePosition();
  }

  setApplePosition() {
    const randomX = Math.floor(Math.random() * this.boardDimensions[0]);
    const randomY = Math.floor(Math.random() * this.boardDimensions[1]);

    const ApplePosition = [{ x: randomX, y: randomY }];
    if (this.snakeBody.some((element) => element.x === ApplePosition[0].x
        && element.y === ApplePosition[0].y)) {
      this.applePosition = this.setApplePosition();
    }

    return ApplePosition;
  }

  isCollided() {
    const newSnakeBody = this.snakeBody.slice();
    const snakeHead = newSnakeBody.pop();
    const newHead = { ...snakeHead };

    if (this.applePosition.some((element, index) => this.applePosition[index].x === newHead.x
    && this.applePosition[index].y === newHead.y)) {
      return true;
    }
    return false;
  }
}

module.exports = Apple;
