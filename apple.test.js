const Apple = require('./apple');

beforeEach( () => {
   this.board = [5, 5];
   this.snakeBody = [{ x: 0, y: 0 }, { x: 0, y:1 }, { x: 0, y: 2 }];
   this.apple = new Apple(this.snakeBody , this.board);
});

test("board size", () => {
  let test = Apple.generateApplePosition(this.board, this.snakeBody);
  
  expect(test.x >= 0 && test.x < this.board[0]).toBeTruthy();
  expect(test.y >= 0 && test.y < this.board[0]).toBeTruthy();
  expect(this.snakeBody.some(element => element.x === test.x && element.y === test.y)).toBeFalsy();
});

test('isCollied; Head is  not equal to apple position', () => {
  this.apple.applePosition = { x: 2, y: 2 };
  expect(this.apple.isCollided()).toBeFalsy();
});

test('isCollied; Head is equal to apple position', () => {
  this.apple.applePosition = { x: 0, y: 2 };
  expect(this.apple.isCollided()).toBeTruthy();
});



