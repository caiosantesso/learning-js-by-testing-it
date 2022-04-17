test('undefined as left operand', () => {
  const expected = '';
  
  expect(undefined ?? expected).toBe(expected);
});

test('null as left operand', () => {
  const expected = '';
  
  expect(null ?? expected).toBe(expected);
});

test('primitive as left operand', () => {
  const expected = 27n;

  expect(expected ?? null).toBe(expected);
});

test('both operands nullish', () => {

  expect(undefined ?? null).toBeNull();
});

test('short-circuiting', () => {
  let side;
  const left = () => side = 'left';
  const right = jest.fn(() => side = 'right');
  left() ?? right();

  expect(side).toBe('left');
  expect(right).not.toHaveBeenCalled();
});