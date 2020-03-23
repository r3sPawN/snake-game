const Snake = require('./snake');

test('move Left', () => {
  const calculatedSnakeBody = Snake.calculateSnakeBody('LEFT', [{ x: 0, y: 0 }, { x: 0, y:1 }, { x: 0, y: 2 }]);
  expect(calculatedSnakeBody).toEqual([{ x: 0, y:1}, {x: 0, y:2}, {x: 0, y:3}]);
});

test('move Up', () => {
  const calculatedSnakeBody = Snake.calculateSnakeBody('UP', [{ x: 2, y: 2 }, { x: 2, y: 3 }, { x: 2, y: 4 }]);
  expect(calculatedSnakeBody).toEqual([{ x: 2, y: 3 }, { x: 2, y: 4 }, { x: 1, y: 4 }]);
});

test('move Right', () => {
  const calculatedSnakeBody = Snake.calculateSnakeBody('RIGHT', [{ x: 1, y: 2 }, { x: 2, y: 2 }, { x: 3, y: 2 }]);
  expect(calculatedSnakeBody).toEqual([{ x: 2, y: 2 }, { x: 3, y: 2 }, { x: 3, y: 1 }]);
});

test('move Down', () => {
  const calculatedSnakeBody = Snake.calculateSnakeBody('DOWN', [{ x: 2, y: 2 }, { x: 2, y: 3 }, { x: 2, y: 4 }])
  expect(calculatedSnakeBody).toEqual([{ x: 2, y: 3 }, { x: 2, y: 4 }, { x: 3, y: 4 }]);
});

test('wrong input', () => {
  expect( () => { 
    Snake.calculateSnakeBody('UGIBUGI', [{ x: 0, y: 0 }, { x: 0, y:1 }, { x: 0, y: 2 }]) }).toThrowError('wrong input');
});

test('Self eat', () => {
  expect( () => { 
    Snake.calculateSnakeBody('RIGHT', [{ x: 0, y: 0 }, { x: 0, y:1 }, { x: 0, y: 2 }]) }).toThrowError('The game is over');
});

