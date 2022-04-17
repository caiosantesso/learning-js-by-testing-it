test('falsy as left operand', () => {
  const falsy = '';

  expect(falsy && null).toBe(falsy);
});

test('truthy as left operand', () => {
  const truthy = [];

  expect(truthy && null).toBeNull();
});

test('truthy as both operands', () => {
  const leftTruthy = ' ';
  const rightTruthy = [];

  expect(leftTruthy && rightTruthy).toBe(rightTruthy);
});


test('short-circuiting', () => {
  let side;
  const left = () => side = 'left';
  const right = jest.fn(() => side = 'right');
  left() || right();

  expect(side).toBe('left');
  expect(right).not.toHaveBeenCalled();
});