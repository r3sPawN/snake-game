const Board = require('./board');

test('board test', () => {
  const board = [5, 5];
  const snakeBody = [{ x: 0, y: 0 }, { x: 0, y:1 }, { x: 0, y: 2 }];
  const applePosition = { x: 1, y: 3 };
  testboard = new Board(snakeBody, applePosition, board);

  expect(testboard.calculateBoard(snakeBody, applePosition, board)).toEqual([ 
  [ 'x', 'x', 'x', 0, 0 ],
  [ 0, 0, 0 , 'A', 0 ],
  [ 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0 ] 
])
})