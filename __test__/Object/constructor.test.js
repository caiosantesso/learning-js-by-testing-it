const emptyObj = {};

test('no args', () => {
  const obj = new Object();

  expect(obj).toEqual(emptyObj);
});

test('null', () => {
  const obj = new Object(null);

  expect(obj).toEqual(emptyObj);
});

test('undefined', () => {
  const obj = new Object(undefined);

  expect(obj).toEqual(emptyObj);
});

test('a boolean obj', () => {
  const obj = new Object(true);

  expect(obj).toEqual(new Boolean(true));
});

test('not a boolean literal', () => {
  const obj = new Object(true);

  expect(obj).not.toEqual(true);
});

test('a string obj', () => {
  const obj = new Object('abc');

  expect(obj).toEqual(new String('abc'));
});

test('not a string literal', () => {
  const obj = new Object('abc');

  expect(obj).not.toEqual('abc');
});

test('an object', () => {
  const literalObj = { a: 'yay' };
  const obj = new Object(literalObj);

  expect(obj).toBe(literalObj);
});