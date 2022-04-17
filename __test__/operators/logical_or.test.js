test('truthy as left operand', () => {
  const truthy = 1n;

  expect(truthy || null).toBe(truthy);
});

test('falsy as left operand', () => {
  const falsy = '';
  
  expect(falsy || null).toBeNull();
});

test('falsy as both operands', () => {
  const leftFalsy = 0;
  const rightFalsy = NaN;

  expect(leftFalsy || rightFalsy).toBeNaN();
});

test('short-circuiting', () => {
  let side;
  const left = () => side = 'left';
  const right = jest.fn(() => side = 'right');
  left() || right();

  expect(side).toBe('left');
  expect(right).not.toHaveBeenCalled();
});